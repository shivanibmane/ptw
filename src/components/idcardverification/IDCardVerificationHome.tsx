import { useContext } from "react"
import { AppContext } from "../AppContext"
import IDCardImage from "./IDCardImage"
import PersonImage from "./PersonImage"
import IDCardVerificationOutput from "./IDCardVerificationOutput"


const IDCardVerificationHome = () => {
  const { isSelectedVerificationFile }: any = useContext(AppContext)
  return (
    <div >
      {<div className="flex flex-col sm:flex-col items-center  mx-auto min-xl:flex-row  gap-5 px-4 py-7 mt-10">
        <IDCardImage />
        <PersonImage />
        {
          isSelectedVerificationFile && <IDCardVerificationOutput />
        }
      </div>}
    </div>
  )
}
export default IDCardVerificationHome;
