// import { Request, Response, NextFunction } from "express";
// import jwt from "jsonwebtoken";

// interface JwtPayload {
//   id: string;
//   email: string;
//   role: string;
//   sub?: string; // Clerk user ID
//   userId?: string; // Alternative user ID field
// }

// declare global {
//   namespace Express {
//     interface Request {
//       user?: JwtPayload;
//     }
//   }
// }

// /**
//  * Authenticate token - supports both Clerk JWT and custom JWT
//  */
// export const authenticateToken = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1];

//   if (!token) {
//     return res.status(401).json({ error: "Access token required" });
//   }

//   try {
//     // Try to verify as Clerk token first (no secret needed for public verification)
//     // In production, you should verify Clerk tokens properly using Clerk's SDK
//     const decoded = jwt.decode(token) as JwtPayload;

//     if (!decoded) {
//       return res.status(403).json({ error: "Invalid token format" });
//     }

//     // Map Clerk token fields to our user object
//     req.user = {
//       id: decoded.sub || decoded.userId || decoded.id,
//       email: decoded.email,
//       role: decoded.role || "student",
//     };

//     next();
//   } catch (error) {
//     // Fallback: try to verify as custom JWT
//     try {
//       const decoded = jwt.verify(
//         token,
//         process.env.JWT_SECRET || "your-secret-key"
//       ) as JwtPayload;
//       req.user = decoded;
//       next();
//     } catch (jwtError) {
//       return res.status(403).json({ error: "Invalid or expired token" });
//     }
//   }
// };

// /**
//  * Optional authentication - doesn't fail if no token
//  */
// export const optionalAuth = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1];

//   if (token) {
//     try {
//       const decoded = jwt.decode(token) as JwtPayload;
//       if (decoded) {
//         req.user = {
//           id: decoded.sub || decoded.userId || decoded.id,
//           email: decoded.email,
//           role: decoded.role || "student",
//         };
//       }
//     } catch (error) {
//       // Token invalid but continue without user
//     }
//   }

//   next();
// };

// /**
//  * Authorize specific roles
//  */
// export const authorizeRoles = (...roles: string[]) => {
//   return (req: Request, res: Response, next: NextFunction) => {
//     if (!req.user) {
//       return res.status(401).json({ error: "Authentication required" });
//     }

//     if (!roles.includes(req.user.role)) {
//       return res.status(403).json({ error: "Insufficient permissions" });
//     }

//     next();
//   };
// };
