import { useContext } from "react"
import { AppContext } from "../AppContext"
import ModalImage from "react-modal-image"

const DerrickImage = () => {
  const { derrickUrl, isSelectedVerificationFile, isLoading, verificationOutputValues }: any = useContext(AppContext)
  const derrickOutputImage = verificationOutputValues?.
    processedImageUrl
  return (
    <div className="flex xl:flex-row flex-col items-center mx-auto  gap-10 justify-center my-8" >
      <div className="w-[300px] h-auto xl:w-[450px] xl:[400px]  flex justify-center items-center ">
        {derrickUrl !== null && <div className="flex flex-col items-center"><ModalImage small={derrickUrl} medium={derrickUrl} alt="Derrick" hideZoom={false} className="w-[300px] h-auto" /><p className="text-gray-400">Derrick</p></div>}
      </div>
      {isSelectedVerificationFile && !isLoading && <div className="w-[300px] h-auto sm:w-[450px] sm:[400px] flex justify-center items-center">
        {derrickUrl !== null && <div className="flex flex-col items-center"><ModalImage small={derrickOutputImage} medium={derrickOutputImage} alt="Derrick" hideZoom={false} className="w-[300px] h-auto" /><p className="text-gray-400">Derrick</p></div>}
      </div>}
    </div>)
}
export default DerrickImage
