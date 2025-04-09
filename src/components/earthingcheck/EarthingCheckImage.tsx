import { useContext, } from "react"
import { AppContext } from "../AppContext"
import ModalImage from "react-modal-image"

const EarthingCheckImage = () => {
  const { earthingCheckUrl, isSelectedVerificationFile }: any = useContext(AppContext)
  return (
    <div className="flex xl:flex-row flex-col items-center mx-auto  gap-10 justify-center my-8" >
      <div className="w-[300px] h-auto xl:w-[450px] xl:[400px]  flex justify-center items-center ">
        {earthingCheckUrl !== null && <div className="flex flex-col items-center"><ModalImage small={earthingCheckUrl} medium={earthingCheckUrl} alt="Earthing" hideZoom={false} className="w-[300px] h-auto" /><p className="text-gray-400">Earthing</p></div>}
      </div>
      {isSelectedVerificationFile && <div className="w-[300px] h-auto sm:w-[450px] sm:[400px] flex justify-center items-center">
        {earthingCheckUrl !== null && <div className="flex flex-col items-center"><ModalImage small={earthingCheckUrl} medium={earthingCheckUrl} alt="Earthing" hideZoom={false} className="w-[300px] h-auto" /><p className="text-gray-400">Earthing</p></div>}
      </div>}
    </div>
  )
}
export default EarthingCheckImage;
