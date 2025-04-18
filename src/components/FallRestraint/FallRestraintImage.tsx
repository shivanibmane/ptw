import { useContext } from "react"
import { AppContext } from "../AppContext"
import ModalImage from "react-modal-image"

const FallRestraintImage = () => {
  const { fallRestraintUrl, isSelectedVerificationFile, isLoading, verificationOutputValues }: any = useContext(AppContext)
  const fallRestraintOutputImage = verificationOutputValues?.processedImageUrl

  return (
    <div className="flex xl:flex-row flex-col items-center mx-auto  gap-10 justify-center my-8" >
      <div className="w-[300px] h-auto xl:w-[450px] xl:[400px]  flex justify-center items-center ">
        {fallRestraintUrl !== null && <div className="flex flex-col items-center"><ModalImage small={fallRestraintUrl} medium={fallRestraintUrl} alt="Fall Restraint" className="w-[300px] h-auto" /><p className="text-gray-400">Fall Restraint</p></div>}
      </div>
      {isSelectedVerificationFile && !isLoading && <div className="w-[300px] h-auto sm:w-[450px] sm:[400px] flex justify-center items-center">
        {fallRestraintUrl !== null && <div className="flex flex-col items-center"><ModalImage small={fallRestraintOutputImage} medium={fallRestraintOutputImage} alt="Fall Restraint" className="w-[300px] h-auto" /><p className="text-gray-400">Fall Restraint</p></div>}
      </div>}
    </div>
  )
}

export default FallRestraintImage
