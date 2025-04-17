import { useContext } from "react"
import ModalImage from "react-modal-image"
import { AppContext } from "../AppContext"

const FirstAidKitImage = () => {
  const { firstAidKitImageUrl, isSelectedVerificationFile, isLoading, verificationOutputValues }: any = useContext(AppContext)
  const firstAidKitOutputImage = verificationOutputValues?.processedImageUrl
  return (
    <div className="flex xl:flex-row flex-col items-center mx-auto  gap-10 justify-center my-8" >
      <div className="w-[300px] h-auto xl:w-[450px] xl:[400px]  flex justify-center items-center ">
        {firstAidKitImageUrl !== null && <div className="flex flex-col items-center"><ModalImage small={firstAidKitImageUrl} medium={firstAidKitImageUrl} alt="First Aid Box" hideZoom={false} className="w-[300px] h-auto" /><p className="text-gray-400">First Aid Box</p></div>}
      </div>
      {isSelectedVerificationFile && !isLoading && <div className="w-[300px] h-auto sm:w-[450px] sm:[400px] flex justify-center items-center">
        {firstAidKitImageUrl !== null && <div className="flex flex-col items-center"><ModalImage small={firstAidKitOutputImage} medium={firstAidKitOutputImage} alt="First Aid Box" hideZoom={false} className="w-[300px] h-auto" /><p className="text-gray-400">First Aid Box</p></div>}
      </div>}
    </div>
  )
}
export default FirstAidKitImage
