import FirstAidKitHome from "./firstaindkit/FirstAidKitHome";
import IDCardVerificationHome from "./idcardverification/IDCardVerificationHome";
import { SidebarTrigger } from "./ui/sidebar";

const AppContent = ({ checkpointId }: any) => {
  const contentConfig: any = {
    "id-card-verification": <IDCardVerificationHome />,
    "first-aid-kit": <FirstAidKitHome />,
  };
  return (
    <>
      <div className="main-content w-full">
        <SidebarTrigger />
        <h1 className="text-center py-10 text-[#F92609] font-semibold text-4xl">PTW Monitaring Automation</h1>
        {contentConfig[checkpointId]}
      </div>

    </>
  )
}

export default AppContent
