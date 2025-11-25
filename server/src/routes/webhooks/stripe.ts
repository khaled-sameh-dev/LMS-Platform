import { Request, Response } from "express";
import { prisma } from "../../config/db";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const handleStripeWebhook = async (req: Request, res: Response) => {
  try {
    const sig = req.headers["stripe-signature"] as string;
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
    } catch (err: any) {
      console.error("Webhook signature verification failed:", err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle the event
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;

        const { courseId, userId, clerkUserId } = session.metadata!;

        if (!clerkUserId || !userId) {
          return res.status(403).json({
            success: false,
            message: "Unauthorized access",
          });
        }

        if (!courseId) {
          return res.status(404).json({
            success: false,
            message: "Course Not Found",
          });
        }

        // Check if enrollment already exists
        const existingEnrollment = await prisma.enrollment.findUnique({
          where: {
            userId_courseId: {
              userId,
              courseId,
            },
          },
        });

        if (!existingEnrollment) {
          // Create enrollment and payment record
          await prisma.$transaction(async (tx) => {
            await tx.enrollment.create({
              data: {
                userId,
                courseId,
              },
            });

            await tx.paymentHistory.create({
              data: {
                userId,
                courseId,
                amount: session.amount_total! / 100,
                currency: session.currency?.toUpperCase() || "USD",
                status: "COMPLETED",
                transactionId: session.payment_intent as string,
                paymentMethod: "CARD",
                paidAt: new Date(),
              },
            });

            await tx.course.update({
              where: { id: courseId },
              data: { studentsCount: { increment: 1 } },
            });
          });
        }
        break;
      }

      case "payment_intent.payment_failed": {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.error("Payment failed:", paymentIntent.id);
        // Handle failed payment (send notification, update status, etc.)
        break;
      }

      case "charge.refunded": {
        const charge = event.data.object as Stripe.Charge;
        // Handle refund logic
        await prisma.paymentHistory.updateMany({
          where: { transactionId: charge.payment_intent as string },
          data: { status: "REFUNDED" },
        });
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return res.status(200).json({ received: true });
  } catch (error: any) {
    console.error("Webhook handler error:", error);

    return res.status(500).json({
      success: false,
      message: "Webhook handler failed",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};

export default handleStripeWebhook;
