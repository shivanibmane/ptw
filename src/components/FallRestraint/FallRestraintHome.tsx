import { useContext } from "react"
import FallRestraintImage from "./FallRestraintImage"
import { AppContext } from "../AppContext"
import FallRestraintOutput from "./FallRestraintOutput"

const FallRestraintHome = () => {
  const { isSelectedVerificationFile }: any = useContext(AppContext)
  return (
    <>
      <FallRestraintImage />
      {isSelectedVerificationFile && <FallRestraintOutput />}
    </>
  )
}

export default FallRestraintHome
