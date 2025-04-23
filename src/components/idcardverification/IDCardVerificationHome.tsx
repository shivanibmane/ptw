import { useContext } from "react"
import { AppContext } from "../../components/AppContext"
import IDCardImage from "./IDCardImage"
import PersonImage from "./PersonImage"
import IDCardVerificationOutput from "./IDCardVerificationOutput"


const IDCardVerificationHome = () => {
  const { isSelectedVerificationFile, selectedCheckbox, }: any = useContext(AppContext)

  let selectedCheckPointContent;
  if (selectedCheckbox === "Face Verification") {
    selectedCheckPointContent = <div className="flex flex-col  items-center gap-6  mx-auto min-xl:flex-row xl:gap-4  py-7 xl:mt-10">
      <IDCardImage />
      <PersonImage />
      {
        isSelectedVerificationFile && <IDCardVerificationOutput />
      }
    </div>
  } else if (selectedCheckbox === "ID Card Verification") {
    selectedCheckPointContent = <div className="flex flex-col items-center mx-auto gap-5 py-7 xl:mt-10" >
      <IDCardImage />
      {
        isSelectedVerificationFile && <IDCardVerificationOutput />
      }
    </div>
  }

  return (
    <div >
      {selectedCheckPointContent}
    </div>
  )
}
export default IDCardVerificationHome;
