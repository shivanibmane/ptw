import AppContent from "./AppContent";
import AppSidebar from "./AppSidebar";
import { SidebarProvider, } from "./ui/sidebar";
import { Toaster } from "sonner";

const Home = ({ checkpointId }: any) => {

  return (
    <>
      <SidebarProvider>
        <AppSidebar checkpointId={checkpointId} />
        <AppContent checkpointId={checkpointId} />
        <Toaster richColors />
      </SidebarProvider>
    </>
  )
}

export default Home
