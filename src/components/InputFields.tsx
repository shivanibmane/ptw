import FirstAidKitInput from './checkpointinput/FirstAidKitInput'
import IDCardVerificationInput from './checkpointinput/IDCardVerificationInput'


const InputFields = ({ checkpointId }: any) => {
  const fieldsConfig: any = {
    "id-card-verification": <IDCardVerificationInput />,
    "first-aid-kit": <FirstAidKitInput />
  }
  return (
    <>
      {fieldsConfig[checkpointId]}
    </>
  )
}

export default InputFields
