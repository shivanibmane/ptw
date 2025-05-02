import { useContext } from "react"
import PersonalProtectionEquipmentImage from "./PersonalProtectionEquipmentImage"
import { AppContext } from "../AppContext"
import PersonalProtectionEquipmentOutput from "./PersonalProtectionEquipmentOutput"

const PersonalProtectionEquipmentHome = () => {
  const { isSelectedVerificationFile }: any = useContext(AppContext)
  return (
    <div className="flex flex-col items-center justify-center gap-10 my-8">
      <PersonalProtectionEquipmentImage />
      {
        isSelectedVerificationFile && <PersonalProtectionEquipmentOutput />
      }
    </div>
  )
}

export default PersonalProtectionEquipmentHome
