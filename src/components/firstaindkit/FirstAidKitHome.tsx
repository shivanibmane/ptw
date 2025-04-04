import { useContext } from "react"
import FirstAidKitImage from "./FirstAidKitImage"
import FirstAidKitOutput from "./FirstAidKitOutput"
import { AppContext } from "../AppContext"

const FirstAidKitHome = () => {
  const { isSelectedVerificationFile }: any = useContext(AppContext)

  return (
    <div className="flex flex-col items-center justify-center mx-auto">
      <FirstAidKitImage />
      {isSelectedVerificationFile && <FirstAidKitOutput />}
    </div>

  )
}

export default FirstAidKitHome
