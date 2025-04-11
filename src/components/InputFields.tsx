import BarricadeSiteInput from './barricadedsites/BarricadeSiteInput'
import DerrickInput from './derrick/DerrickInput'
import EarthingCheckInput from './earthingcheck/EarthingCheckInput'
import FallRestraintInput from './fallrestraint/FallRestraintInput'
import FirstAidKitInput from './firstaidkit/FirstAidKitInput'
import IDCardVerificationInput from './idcardverification/IDCardVerificationInput'
import ToolsSafetyInput from './toolssafety/ToolsSafetyInput'
import VoltageCheckInput from './nevoltage/NEVoltageCheckInput'
import RoofEdgeProtectionInput from './roofedgeprotection/RoofEdgeProtectionInput'

const InputFields = ({ checkpointId }: any) => {
  const fieldsConfig: any = {
    "id-card-verification": <IDCardVerificationInput />,
    "first-aid-kit": <FirstAidKitInput />,
    "barricade-site": <BarricadeSiteInput />,
    "ne-voltage-check": <VoltageCheckInput />,
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
