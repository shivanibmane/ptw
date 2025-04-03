import { useContext } from "react"
import BarricadeSiteImage from "./BarricadeSiteImage"
import BarricadeSiteOutput from "./BarricadeSiteOutput"
import { AppContext } from "../AppContext"
const BarricadeSitetHome = () => {
  const { isSelectedVerificationFile }: any = useContext(AppContext)
  return <>
    <BarricadeSiteImage />
    {isSelectedVerificationFile && <BarricadeSiteOutput />}

  </>
}

export default BarricadeSitetHome
