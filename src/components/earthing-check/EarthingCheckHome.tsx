import { useContext } from "react"
import EarthingCheckImage from "./EarthingCheckImage"
import EarthingCheckOutput from "./EarthingCheckOutput"
import { AppContext } from "../AppContext"

const EarthingCheckHome = () => {
  const { isSelectedVerificationFile }: any = useContext(AppContext)

  return (
    <>
      <EarthingCheckImage />
      {isSelectedVerificationFile && <EarthingCheckOutput />}
    </>
  )
}

export default EarthingCheckHome
