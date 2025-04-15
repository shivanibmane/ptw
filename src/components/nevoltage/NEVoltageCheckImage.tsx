import { useContext } from "react"
import ModalImage from "react-modal-image"
import { AppContext } from "../AppContext"

const NEVoltageCheckImage = () => {


  const { nevoltageCheckUrl, isSelectedVerificationFile, verificationOutputValues, isLoading }: any = useContext(AppContext)
  const neVoltageOutputImage = verificationOutputValues?.processedImageUrl

  return (
    <div className="flex xl:flex-row flex-col items-center mx-auto  gap-10 justify-center my-8" >
      <div className="w-[300px] h-auto xl:w-[450px] xl:[400px]  flex justify-center items-center ">
        {nevoltageCheckUrl !== null && <div className="flex flex-col items-center"><ModalImage small={nevoltageCheckUrl} medium={nevoltageCheckUrl} alt="N-E Voltage Image" hideZoom={false} className="w-[300px] h-auto" /><p className="text-gray-400">N-E Voltage Image</p></div>}
      </div>
      {isSelectedVerificationFile && !isLoading && <div className="w-[300px] h-auto sm:w-[450px] sm:[400px] flex justify-center items-center">
        {nevoltageCheckUrl !== null && <div className="flex flex-col items-center"><ModalImage small={neVoltageOutputImage} medium={neVoltageOutputImage} alt="N-E Voltage Image" hideZoom={false} className="w-[300px] h-auto" /><p className="text-gray-400">N-E Voltage Image</p></div>}
      </div>}
    </div>
  )

}

export default NEVoltageCheckImage
