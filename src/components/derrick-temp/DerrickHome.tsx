import { useContext } from "react"
import DerrickImage from "./DerrickImage"
import DerrickOutput from "./DerrickOutput"
import { AppContext } from "../AppContext"

const DerrickHome = () => {
  const { isSelectedVerificationFile }: any = useContext(AppContext)
  return (
    <>
      <DerrickImage />
      {isSelectedVerificationFile && <DerrickOutput />}

    </>
  )
}

export default DerrickHome
