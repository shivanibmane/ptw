import { useContext } from "react"
import ToolsSafetyImage from "./ToolsSafetyImage"
import { AppContext } from "../AppContext"
import ToolsSafetyOutput from "./ToolsSafetyOutput"

const ToolsSafetyHome = () => {
  const { isSelectedVerificationFile }: any = useContext(AppContext)

  return (
    <div className="flex flex-col items-center justify-center mx-auto">
      <ToolsSafetyImage />
      {isSelectedVerificationFile && <ToolsSafetyOutput />}
    </div>
  )
}

export default ToolsSafetyHome
