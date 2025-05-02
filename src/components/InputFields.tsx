import BarricadeSiteInput from "./BarricadeSite/BarricadeSiteInput"
import DerrickInput from "./derrick/DerrickInput"
import EarthingCheckInput from "./earthing-check/EarthingCheckInput"
import FallRestraintInput from "./FallRestraint/FallRestraintInput"
import FirstAidKitInput from "./first-aid-kit/FirstAidKitInput"
import IDCardVerificationInput from "./id-card-verification/IDCardVerificationInput"
import NeutralEarthVoltageCheckInput from "./NeutralEarthVoltage/NeutralEarthVoltageCheckInput"
import PersonalProtectionEquipmentInput from "./PersonalProtectionEquipment/PersonalProtectionEquipmentInput"
import RoofEdgeProtectionInput from "./roof-edge-protection/RoofEdgeProtectionInput"
import ToolsSafetyInput from "./tools-safety/ToolsSafetyInput"

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
    "roof-edge-protection": <RoofEdgeProtectionInput />,
    "personal-protection-equipment": <PersonalProtectionEquipmentInput />
  }
  return (
    <>
      {fieldsConfig[checkpointId]}
    </>
  )
}
export default InputFields
