import Footer from "@/components/shared/Footer";
import NonDashboardNavbar from "@/components/shared/NonDashboardNavbar";
import { ReactNode } from "react";


const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-primary-blue text-white">
      <NonDashboardNavbar />

      <main className="flex w-full h-full justify-center items-center">
        {children}
      </main>

      <Footer />
    </div>
  );
};


export default layout;