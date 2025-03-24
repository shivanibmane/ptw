import AppContent from "./AppContent";
import AppSidebar from "./AppSidebar";
import { SidebarProvider, } from "./ui/sidebar";

const Home = ({ checkpointId }: any) => {

  return (
    <>
      <SidebarProvider>
        <AppSidebar checkpointId={checkpointId} />
        <AppContent checkpointId={checkpointId} />
      </SidebarProvider>
    </>
  )
}

export default Home
