import { useContext } from "react"
import { AppContext } from "../AppContext"
import ModalImage from "react-modal-image";

const IDCardImage = () => {
  const { idCardImageUrl, }: any = useContext(AppContext);
  return (
    <>
      <div className="xl:w-[450px] xl:h-[400px] flex justify-center items-center" >
        {idCardImageUrl !== null && <div className="flex flex-col items-center"><ModalImage small={idCardImageUrl} medium={idCardImageUrl} alt="ID Card" hideZoom={false} /><p className="text-gray-400">ID Card</p></div>}
      </div>
    </>
  )
}
export default IDCardImage
