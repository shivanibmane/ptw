import { useContext } from "react"
import { AppContext } from "../AppContext"
import ModalImage from "react-modal-image"
const personImage = () => {
  const { personImageUrl }: any = useContext(AppContext)
  return (
    <>
      <div className="w-[300px] h-auto sm:w-[450px] flex justify-center items-center" >
        {personImageUrl !== null &&
          <div className="flex flex-col items-center">
            <ModalImage small={personImageUrl} large={personImageUrl} alt="Person Image" className="w-auto h-auto" />
            <p className="text-gray-400">Person Image</p>
          </div>}
      </div>
    </>
  )
}
export default personImage;
