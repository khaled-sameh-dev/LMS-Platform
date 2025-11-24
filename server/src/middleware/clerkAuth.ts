import { Request, Response, NextFunction } from "express";
import { clerkClient, getAuth, verifyToken } from "@clerk/express";
import { prisma } from "../config/db";
import { UserRole } from "@prisma/client";

declare global {
  namespace Express {
    interface Request {
      auth?: {
        userId: string;
        clerkId?: string;
        userEmail: string;
        userRole?: UserRole;
      };
    }
  }
}

/**
 * Clerk Auth Middleware + Extract User
 */
export const requireAuth = (allowedRoles?: UserRole[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log("header " , req.headers.authorization)
      const { userId } = getAuth(req);
    console.log("user id" , userId)

      if (!userId) {
        return res.status(401).json({ error: "Authentication required" });
      }

      // Fetch Clerk user
      const user = await clerkClient.users.getUser(userId);

      if (!user) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized User",
        });
      }

      const email = user.emailAddresses?.[0]?.emailAddress;
      const role = (user.publicMetadata.role as UserRole) || "STUDENT";


      // If authorization is required
      if (allowedRoles && !allowedRoles.includes(role)) {
        return res.status(403).json({ error: "Permission denied" });
      }

      const prismaUser = await prisma.user.findUnique({
        where: {
          clerkId: user.id,
        },
      });
    console.log("prisma" , prismaUser)
      if (!prismaUser) {
        return res.status(404).json({ message: "User Not Found" });
      }

      // Attach to request
      req.auth = {
        clerkId: userId,
        userId: prismaUser?.id,
        userEmail: email || "",
        userRole: role,
      };


      next();
    } catch (err) {
      console.error("Auth Error:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
  };
};
/**
 * OPTIONAL AUTH — doesn’t throw error if not logged in
 */
export const optionalAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId } = getAuth(req);

  if (userId) {
    try {
      const user = await clerkClient.users.getUser(userId);
      req.auth = {
        userId,
        userEmail: user.emailAddresses?.[0]?.emailAddress || "",
        userRole: (user.publicMetadata.role as UserRole) || "STUDENT",
      };
    } catch (err) {
      // No need to return error
    }
  }

  next();
};
