import { useContext } from "react"
import { AppContext } from "../AppContext"
import ModalImage from "react-modal-image"

const BarricadeSiteImage = () => {
  const { barricadeSiteImageUrl, isSelectedVerificationFile, isLoading, verificationOutputValues }: any = useContext(AppContext)
  const barricadeSiteOutputImage = verificationOutputValues?.processedImageUrl
  return (
    <div className="flex xl:flex-row flex-col items-center mx-auto  gap-10 justify-center my-8" >
      <div className="w-[300px] h-auto xl:w-[450px] xl:[400px]  flex justify-center items-center ">
        {barricadeSiteImageUrl !== null && <div className="flex flex-col items-center"><ModalImage small={barricadeSiteImageUrl} medium={barricadeSiteImageUrl} alt="Raw Barricade Site Image" className="w-[300px] h-auto" /><p className="text-gray-400">Raw Barricade Site Image</p></div>}
      </div>
      {isSelectedVerificationFile && !isLoading && <div className="w-[300px] h-auto sm:w-[450px] sm:[400px] flex justify-center items-center">
        {barricadeSiteImageUrl !== null && <div className="flex flex-col items-center"><ModalImage small={barricadeSiteOutputImage} medium={barricadeSiteOutputImage} alt="Output Barricade Site Image" className="w-[300px] h-auto" /><p className="text-gray-400">Output Barricade Site Image</p></div>}
      </div>}
    </div>
  )
}

export default BarricadeSiteImage
