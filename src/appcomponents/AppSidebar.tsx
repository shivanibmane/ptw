import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import IDVerification from "./IDVerification"
import logo from "../assets/resoluteai_logo.webp"

const AppSidebar = () => {

  return (
    <>
      <Sidebar >
        <img src={logo} alt="logo" className="px-5 py-4" />
        <SidebarContent >
          <SidebarGroup >
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <IDVerification />
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

      </Sidebar>

    </>
  )
}

export default AppSidebar
