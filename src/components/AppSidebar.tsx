import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import logo from "../assets/resoluteai_logo.webp"
import CheckPointSelector from "./CheckPointSelector"
import InputFields from "./InputFields"


const AppSidebar = ({ checkpointId }: any) => {



  return (
    <>
      <Sidebar >
        <SidebarHeader>
          <img src={logo} alt="logo" className="px-5 py-2" />
        </SidebarHeader>
        <SidebarContent >
          <SidebarGroup >
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton className="w-[100%]" asChild>
                    <CheckPointSelector />
                  </SidebarMenuButton>
                  <InputFields checkpointId={checkpointId} />
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="px-5 py-2">
          <p>Powered by</p>
          <img src={logo} alt="logo" className="" />
        </SidebarFooter>

      </Sidebar>
    </>
  )
}

export default AppSidebar
