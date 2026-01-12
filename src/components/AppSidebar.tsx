import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";
import { storage } from "@/utils/storage";
import { useNavigate } from "react-router-dom";

function AppSidebar() {
  const navigate = useNavigate();

  const logout = () => {
    storage.removeUser();
    navigate("/login");
  };

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton className="text-base" asChild>
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="flex flex-row items-center text-base text-red-700 pb-4">
        <LogOut className="w-5 h-5" />
        <button onClick={logout}>Logout</button>
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
