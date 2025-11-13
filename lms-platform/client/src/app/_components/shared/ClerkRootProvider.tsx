"use client";

import { ClerkProvider } from "@clerk/nextjs";

export default function ClerkRootProvider({
  children,
  publishableKey,
}: {
  children: React.ReactNode;
  publishableKey: string;
}) {
  return (
    <ClerkProvider publishableKey={publishableKey} appearance={{ cssLayerName: "clerk" }}>
      {children}
    </ClerkProvider>
  );
}