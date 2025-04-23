import { useContext } from "react"
import { AppContext } from "../AppContext"
import NEVoltageCheckImage from "./NeutralEarthVoltageCheckImage"
import NEVoltageCheckOutput from "./NeutralEarthVoltageCheckOutput"


const NeutralEarthVoltageCheckHome = () => {
  const { isSelectedVerificationFile }: any = useContext(AppContext)
  return <>
    <NEVoltageCheckImage />
    {isSelectedVerificationFile && <NEVoltageCheckOutput />}

  </>

}

export default NeutralEarthVoltageCheckHome
