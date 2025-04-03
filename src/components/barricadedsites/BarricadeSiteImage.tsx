import { useContext } from "react"
import { AppContext } from "../AppContext"
import ModalImage from "react-modal-image"

const BarricadeSiteImage = () => {
  const { barricadeSiteImageUrl, isSelectedVerificationFile }: any = useContext(AppContext)
  return (
    <div className="flex xl:flex-row flex-col items-center mx-auto  gap-10 justify-center my-8" >
      <div className="w-[300px] h-auto xl:w-[450px] xl:[400px]  flex justify-center items-center ">
        {barricadeSiteImageUrl !== null && <div className="flex flex-col items-center"><ModalImage small={barricadeSiteImageUrl} medium={barricadeSiteImageUrl} alt="ID Card" hideZoom={false} className="w-[300px] h-auto" /><p className="text-gray-400">Barricade Site</p></div>}
      </div>
      {isSelectedVerificationFile && <div className="w-[300px] h-auto sm:w-[450px] sm:[400px] flex justify-center items-center">
        {barricadeSiteImageUrl !== null && <div className="flex flex-col items-center"><ModalImage small={barricadeSiteImageUrl} medium={barricadeSiteImageUrl} alt="ID Card" hideZoom={false} className="w-[300px] h-auto" /><p className="text-gray-400">Barricade Site</p></div>}
      </div>}
    </div>
  )
}

export default BarricadeSiteImage
