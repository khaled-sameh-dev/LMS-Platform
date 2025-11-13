import NonDashboardNavbar from "@/app/_components/shared/Navbar";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col text-white bg-primary-blue">
      <div className="flex-1 w-full max-w-7xl mx-auto px-6 sm:px-8 py-6">
        <NonDashboardNavbar />
      </div>
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 sm:px-8 py-6">
        {children}
      </main>
    </div>
  );
};

export default layout;
