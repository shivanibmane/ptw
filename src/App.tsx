import AppSidebar from "./appcomponents/AppSidebar"
import IDCardVerificationHome from "./appcomponents/IDCardVerificationHome"
import { SidebarProvider } from "./components/ui/sidebar"

function App() {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <IDCardVerificationHome />
      </SidebarProvider>
    </>
  )
}

export default App
