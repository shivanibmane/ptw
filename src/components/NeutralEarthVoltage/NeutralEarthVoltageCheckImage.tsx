import { useContext } from "react"
import ModalImage from "react-modal-image"
import { AppContext } from "../AppContext"

const NeutralEarthVoltageCheckImage = () => {


  const { neutralEarthVoltageCheckUrl, isSelectedVerificationFile, verificationOutputValues, isLoading }: any = useContext(AppContext)
  const neVoltageOutputImage = verificationOutputValues?.processedImageUrl

  return (
    <div className="flex xl:flex-row flex-col items-center mx-auto  gap-10 justify-center my-8" >
      <div className="w-[300px] h-auto xl:w-[450px] xl:[400px]  flex justify-center items-center ">
        {neutralEarthVoltageCheckUrl !== null && <div className="flex flex-col items-center"><ModalImage small={neutralEarthVoltageCheckUrl} medium={neutralEarthVoltageCheckUrl} alt="Raw N-E Voltage Image" className="w-[300px] h-auto" /><p className="text-gray-400">Raw N-E Voltage Image</p></div>}
      </div>
      {isSelectedVerificationFile && !isLoading && <div className="w-[300px] h-auto sm:w-[450px] sm:[400px] flex justify-center items-center">
        {neutralEarthVoltageCheckUrl !== null && <div className="flex flex-col items-center"><ModalImage small={neVoltageOutputImage} medium={neVoltageOutputImage} alt="Output N-E Voltage Image" className="w-[300px] h-auto" /><p className="text-gray-400">Output N-E Voltage Image</p></div>}
      </div>}
    </div>
  )

}

export default NeutralEarthVoltageCheckImage
