import { useContext } from "react"
import RoofEdgeImage from "./RoofEdgeImage"
import RoofEdgeProtectionOutput from "./RoofEdgeProtectionOutput"
import { AppContext } from "../AppContext"

const RoofEdgeProtectionHome = () => {
  const { isSelectedVerificationFile }: any = useContext(AppContext)
  return (
    <>
      <RoofEdgeImage />
      {isSelectedVerificationFile && <RoofEdgeProtectionOutput />}
    </>
  )
}

export default RoofEdgeProtectionHome
