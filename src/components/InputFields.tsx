import BarricadeSiteInput from './barricadedsites/BarricadeSiteInput'
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
    "tools-safety": <ToolsSafetyInput />
  }
  return (
    <>
      {fieldsConfig[checkpointId]}
    </>
  )
}
export default InputFields
