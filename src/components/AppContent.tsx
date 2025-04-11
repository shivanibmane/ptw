
import BarricadeSitetHome from "./barricadedsites/BarricadeSitetHome";
import FirstAidKitHome from "./firstaidkit/FirstAidKitHome";
import IDCardVerificationHome from "./idcardverification/IDCardVerificationHome";
import NEVoltageCheckHome from "./nevoltage/NEVoltageCheckHome";
import { SidebarTrigger } from "./ui/sidebar";
import ToolsSafetyHome from "./toolssafety/ToolsSafetyHome";
import DerrickHome from "./derrick/DerrickHome";
import EarthingCheckHome from "./earthingcheck/EarthingCheckHome";
import FallRestraintHome from "./fallrestraint/FallRestraintHome";
import RoofEdgeProtectionHome from "./roofedgeprotection/RoofEdgeProtectionHome";

const AppContent = ({ checkpointId }: any) => {
  const contentConfig: any = {
    "id-card-verification": <IDCardVerificationHome />,
    "first-aid-kit": <FirstAidKitHome />,
    "barricade-site": <BarricadeSitetHome />,
    "ne-voltage-check": <NEVoltageCheckHome />,
    "tools-safety": <ToolsSafetyHome />,
    "derrick": <DerrickHome />,
    "earthing-check": <EarthingCheckHome />,
    "fall-restraint": <FallRestraintHome />,
    "roof-edge-protection": <RoofEdgeProtectionHome />
  };

  return (
    <>
      <div className="main-content w-full">
        <SidebarTrigger className="text-[#F92609]" />
        <h1 className="text-center py-2 text-[#F92609] font-semibold text-4xl">PTW Monitoring Automation</h1>
        {contentConfig[checkpointId]}
      </div>

    </>
  )
}

export default AppContent
