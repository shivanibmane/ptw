import { useContext } from "react"
import ModalImage from "react-modal-image"
import { AppContext } from "../AppContext"

const FirstAidKitImage = () => {
  const { firstAidKitImageUrl, isSelectedVerificationFile }: any = useContext(AppContext)
  return (
    <div className="flex xl:flex-row sm:flex-col items-center gap-10 justify-center" >
      <div className="w-[450px] h-[400px] flex justify-center items-center">
        {firstAidKitImageUrl !== null && <div className="flex flex-col items-center"><ModalImage small={firstAidKitImageUrl} medium={firstAidKitImageUrl} alt="ID Card" hideZoom={false} /><p className="text-gray-400">First Aid Box</p></div>}
      </div>
      {isSelectedVerificationFile && <div className="w-[450px] h-[400px] flex justify-center items-center">
        {firstAidKitImageUrl !== null && <div className="flex flex-col items-center"><ModalImage small={firstAidKitImageUrl} medium={firstAidKitImageUrl} alt="ID Card" hideZoom={false} /><p className="text-gray-400">First Aid Box</p></div>}
      </div>}
    </div>
  )
}
export default FirstAidKitImage
