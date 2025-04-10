import BarricadeSiteInput from './barricadedsites/BarricadeSiteInput'
import DerrickInput from './derrick/DerrickInput'
import EarthingCheckInput from './earthingcheck/EarthingCheckInput'
import FallRestraintInput from './FallRestraint/FallRestraintInput'
import FirstAidKitInput from './firstaindkit/FirstAidKitInput'
import IDCardVerificationInput from './idcardverification/IDCardVerificationInput'
import ToolsSafetyInput from './toolssafety/ToolsSafetyInput'
import VoltageCheckInput from './voltage/NEVoltageCheckInput'

const InputFields = ({ checkpointId }: any) => {
  const fieldsConfig: any = {
    "id-card-verification": <IDCardVerificationInput />,
    "first-aid-kit": <FirstAidKitInput />,
    "barricade-site": <BarricadeSiteInput />,
    "ne-voltage-check": <VoltageCheckInput />,
    "tools-safety": <ToolsSafetyInput />,
    "derrick": <DerrickInput />,
    "earthing-check": <EarthingCheckInput />,
    "fall-restraint": <FallRestraintInput />
  }
  return (
    <>
      {fieldsConfig[checkpointId]}
    </>
  )
}
export default InputFields
