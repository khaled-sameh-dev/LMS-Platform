import NonDashboardNavbar from "@/app/_components/shared/Navbar";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col text-white  bg-primary-blue px-6 sm:max-w-7xl sm:w-3/4 md:w-4/5 sm:px-0 mx-auto">
      <NonDashboardNavbar />

      <main className="flex w-full h-full justify-center items-center">
        {children}
      </main>
    </div>
  );
};

export default layout;
