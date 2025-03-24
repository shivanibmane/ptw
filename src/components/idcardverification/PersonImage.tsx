import { useContext } from "react"
import { AppContext } from "../AppContext"
import ModalImage from "react-modal-image"
const RawFaceImage = () => {
  const { rawFaceImageUrl }: any = useContext(AppContext)
  return (
    <>
      <div className="w-[450px] h-[400px]  flex justify-center items-center" >
        {rawFaceImageUrl !== null &&
          <div className="flex flex-col items-center">
            <ModalImage small={rawFaceImageUrl} large={rawFaceImageUrl} alt="ID Card" className="" />
            <p className="text-gray-400">Raw Face Image</p>
          </div>}
      </div>
    </>
  )
}
export default RawFaceImage;
