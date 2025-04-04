import { useContext } from "react"
import { AppContext } from "../AppContext"
import NEVoltageCheckImage from "./NEVoltageCheckImage"
import NEVoltageCheckOutput from "./NEVoltageCheckOutput"


const NEVoltageCheckHome = () => {
  const { isSelectedVerificationFile }: any = useContext(AppContext)
  return <>
    <NEVoltageCheckImage />
    {isSelectedVerificationFile && <NEVoltageCheckOutput />}

  </>

}

export default NEVoltageCheckHome
