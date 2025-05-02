import BarricadeSitetHome from "./BarricadeSite/BarricadeSiteHome";
import DerrickHome from "./derrick/DerrickHome";
import EarthingCheckHome from "./earthing-check/EarthingCheckHome";
import FallRestraintHome from "./FallRestraint/FallRestraintHome";
import FirstAidKitHome from "./first-aid-kit/FirstAidKitHome";
import IDCardVerificationHome from "./id-card-verification/IDCardVerificationHome";
import NeutralEarthVoltageCheckHome from "./NeutralEarthVoltage/NeutralEarthVoltageCheckHome";
import RoofEdgeProtectionHome from "./roof-edge-protection/RoofEdgeProtectionHome";
import ToolsSafetyHome from "./tools-safety/ToolsSafetyHome";
import { SidebarTrigger } from "./ui/sidebar";


const AppContent = ({ checkpointId }: any) => {
  const contentConfig: any = {
    "id-card-verification": <IDCardVerificationHome />,
    "first-aid-kit": <FirstAidKitHome />,
    "barricade-site": <BarricadeSitetHome />,
    "ne-voltage-check": <NeutralEarthVoltageCheckHome />,
    "tools-safety": <ToolsSafetyHome />,
    "derrick": <DerrickHome />,
    "earthing-check": <EarthingCheckHome />,
    "fall-restraint": <FallRestraintHome />,
    "roof-edge-protection": <RoofEdgeProtectionHome />,
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
