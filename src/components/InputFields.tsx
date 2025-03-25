import FirstAidKitInput from './firstaindkit/FirstAidKitInput'
import IDCardVerificationInput from './idcardverification/IDCardVerificationInput'


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
