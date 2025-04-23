import { useContext } from "react"
import { AppContext } from "../AppContext"
import ModalImage from "react-modal-image"

const RoofEdgeIProtectionImage = () => {
  const { roofEdgeProtectionUrl, isSelectedVerificationFile, verificationOutputValues, isLoading }: any = useContext(AppContext)
  const roofEdgeOutputImage = verificationOutputValues?.processedImageUrl
  return (
    <div className="flex xl:flex-row flex-col items-center mx-auto  gap-10 justify-center my-8" >
      <div className="w-[300px] h-auto xl:w-[450px] xl:[400px] flex justify-center items-center ">
        {roofEdgeProtectionUrl !== null && <div className="flex flex-col items-center"><ModalImage small={roofEdgeProtectionUrl} medium={roofEdgeProtectionUrl} alt="Raw Roof-edge Protection Image" className="w-[300px] h-auto" /><p className="text-gray-400">Raw Roof-edge Protection Image</p></div>}
      </div>
      {isSelectedVerificationFile && !isLoading && <div className="w-[300px] h-auto sm:w-[450px] sm:[400px] flex justify-center items-center">
        {roofEdgeProtectionUrl !== null && <div className="flex flex-col items-center"><ModalImage small={roofEdgeOutputImage} medium={roofEdgeOutputImage} alt="Output Roof-edge Protection Image" className="w-[300px] h-auto" /><p className="text-gray-400">Output Roof-edge Protection Image</p></div>}
      </div>}
    </div>
  )
}
export default RoofEdgeIProtectionImage
