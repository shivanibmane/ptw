import { useContext } from "react"
import { AppContext } from "../AppContext"
import ModalImage from "react-modal-image";

const IDCardImage = () => {
  const { idCardImageUrl, }: any = useContext(AppContext);
  return (
    <>
      <div className="w-[300px] h-auto sm:w-[450px] sm:[400px]  flex justify-center items-center" >
        {idCardImageUrl !== null && <div className="flex flex-col items-center"><ModalImage small={idCardImageUrl} medium={idCardImageUrl} alt="ID Card" className="w-auto h-'400px]" /><p className="text-gray-400">Raw ID Card</p></div>}
      </div>
    </>
  )
}
export default IDCardImage
