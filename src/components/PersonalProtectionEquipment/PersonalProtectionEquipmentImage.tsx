import { useContext } from "react"
import { AppContext } from "../AppContext"
import ModalImage from "react-modal-image"

const PersonalProtectionEquipmentImage = () => {
  const { personalProtectionEquipmentUrl, isSelectedVerificationFile, isLoading, verificationOutputValues }: any = useContext(AppContext)
  const firstAidKitOutputImage = verificationOutputValues?.processedImageUrl

  return (
    <div className="flex xl:flex-row flex-col items-center mx-auto  gap-10 justify-center my-8" >
      <div className="w-[300px] h-auto xl:w-[450px] xl:[400px]  flex justify-center items-center ">
        {personalProtectionEquipmentUrl !== null && <div className="flex flex-col items-center"><ModalImage small={personalProtectionEquipmentUrl} medium={personalProtectionEquipmentUrl} alt="Equipment Safety Raw Image" className="w-[300px] h-auto" /><p className="text-gray-400">Equipment Safety Raw Image</p></div>}
      </div>
      {isSelectedVerificationFile && !isLoading && <div className="w-[300px] h-auto sm:w-[450px] sm:[400px] flex justify-center items-center">
        {personalProtectionEquipmentUrl !== null && <div className="flex flex-col items-center"><ModalImage small={personalProtectionEquipmentUrl} medium={firstAidKitOutputImage} alt="Equipment Output Image" className="w-[300px] h-auto" /><p className="text-gray-400">Equipment Output Image</p></div>}
      </div>}
    </div>
  )
}

export default PersonalProtectionEquipmentImage
