import { ReactNode } from "react";
import Sidebar from "../(protected)/_components/Sidebar";
import DashboardHeader from "../(protected)/_components/DashboardHeader";
import Navbar from "../_components/shared/Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar userRole="student" />

      <div className="flex-1 flex flex-col">
        <main className="flex-1 overflow-y-auto p-8">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
