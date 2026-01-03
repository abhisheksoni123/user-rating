import { Outlet } from "react-router-dom";
import AppSidebar from "@/components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

function DashboardLayout() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <AppSidebar />

        <main className="grid grid-flow-col">
          <SidebarTrigger className="w-full" />
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}

export default DashboardLayout;
