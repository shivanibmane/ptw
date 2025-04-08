import { useContext } from "react"
import { AppContext } from "../AppContext"
import ModalImage from "react-modal-image"
const RawFaceImage = () => {
  const { rawFaceImageUrl }: any = useContext(AppContext)
  return (
    <>
      <div className="w-[300px] h-auto sm:w-[450px] sm:[400px] flex justify-center items-center" >
        {rawFaceImageUrl !== null &&
          <div className="flex flex-col items-center">
            <ModalImage small={rawFaceImageUrl} large={rawFaceImageUrl} alt="Person Image" className="w- h-auto" />
            <p className="text-gray-400">Raw Face Image</p>
          </div>}
      </div>
    </>
  )
}
export default RawFaceImage;
