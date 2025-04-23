import BarricadeSiteInput from "./BarricadeSite/BarricadeSiteInput"
import DerrickInput from "./Derrick/DerrickInput"
import EarthingCheckInput from "./EarthingCheck/EarthingCheckInput"
import FallRestraintInput from "./FallRestraint/FallRestraintInput"
import FirstAidKitInput from "./FirstAidKit/FirstAidKitInput"
import IDCardVerificationInput from "./IDCardVerification/IDCardVerificationInput"
import NeutralEarthVoltageCheckInput from "./NeutralEarthVoltage/NeutralEarthVoltageCheckInput"
import RoofEdgeProtectionInput from "./RoofEdgeProtection/RoofEdgeProtectionInput"
import ToolsSafetyInput from "./ToolsSafety/ToolsSafetyInput"

const InputFields = ({ checkpointId }: any) => {
  const fieldsConfig: any = {
    "id-card-verification": <IDCardVerificationInput />,
    "first-aid-kit": <FirstAidKitInput />,
    "barricade-site": <BarricadeSiteInput />,
    "ne-voltage-check": <NeutralEarthVoltageCheckInput />,
    "tools-safety": <ToolsSafetyInput />,
    "derrick": <DerrickInput />,
    "earthing-check": <EarthingCheckInput />,
    "fall-restraint": <FallRestraintInput />,
    "roof-edge-protection": <RoofEdgeProtectionInput />
  }
  return (
    <>
      {fieldsConfig[checkpointId]}
    </>
  )
}
export default InputFields
