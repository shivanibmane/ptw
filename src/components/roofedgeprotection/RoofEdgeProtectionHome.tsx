import { useContext } from "react"
import RoofEdgeProtectionOutput from "./RoofEdgeProtectionOutput"
import { AppContext } from "../AppContext"
import RoofEdgeIProtectionImage from "./RoofEdgeIProtectionImage"

const RoofEdgeProtectionHome = () => {
  const { isSelectedVerificationFile }: any = useContext(AppContext)
  return (
    <>
      <RoofEdgeIProtectionImage />
      {isSelectedVerificationFile && <RoofEdgeProtectionOutput />}
    </>
  )
}

export default RoofEdgeProtectionHome
