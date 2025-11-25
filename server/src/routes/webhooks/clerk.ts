import { Webhook } from "svix";
import { Request, Response } from "express";
import { prisma } from "../../config/db";

export const clerkWebhook = async (req: Request, res: Response) => {
  const payload = req.body;
  const headers = req.headers;
  
  // Verify signature to ensure it really came from Clerk
  const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET!);

  let event: any;
  try {
    event = wh.verify(
      payload,
      headers as Record<string, string>
    );
  } catch (err) {
    return res.status(400).json({ error: "Invalid signature"  , err});
  }

  const evt = event.type;

  // Handle "user created" event
  if (evt === "user.created") {
    const clerkUser = event.data;

    await prisma.user.create({
      data: {
        clerkId: clerkUser.id,
        email: clerkUser.email_addresses[0].email_address,
        firstName: clerkUser.first_name,
        lastName: clerkUser.last_name,

        // User starts with role = "UNSET" until onboarding
        role: clerkUser.role,
      },
    });
  }

  return res.json({ received: true });
};
