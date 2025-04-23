import { useContext } from "react"
import { AppContext } from "../AppContext"
import ModalImage from "react-modal-image"

const ToolsSafetyImage = () => {
  const { toolsSafetyUrl, isSelectedVerificationFile, verificationOutputValues, isLoading }: any = useContext(AppContext)
  const outputImage = verificationOutputValues?.processedImageUrl

  console.log(toolsSafetyUrl)
  return (
    <div className="flex xl:flex-row flex-col items-center mx-auto  gap-10 justify-center my-8" >
      <div className="w-[300px] h-auto xl:w-[450px] xl:[400px]  flex justify-center items-center ">
        {toolsSafetyUrl !== null && <div className="flex flex-col items-center"><ModalImage small={toolsSafetyUrl} medium={toolsSafetyUrl} alt="Raw Tools Safety Image" className="w-[300px] h-auto" /><p className="text-gray-400">Raw Tools Safety Image</p></div>}
      </div>
      {isSelectedVerificationFile && !isLoading && <div className="w-[300px] h-auto sm:w-[450px] sm:[400px] flex justify-center items-center">
        {outputImage !== null && <div className="flex flex-col items-center"><ModalImage small={outputImage} medium={outputImage} alt="Output Tools Safety Image" className="w-[300px] h-auto" /><p className="text-gray-400">Output Tools Safety Image</p></div>}
      </div>}
    </div>
  )
}
export default ToolsSafetyImage
