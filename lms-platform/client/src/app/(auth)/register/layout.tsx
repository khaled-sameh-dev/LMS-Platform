import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full bg-primary-blue flex  justify-center items-center">
      {children}
    </div>
  );
};

export default layout;
