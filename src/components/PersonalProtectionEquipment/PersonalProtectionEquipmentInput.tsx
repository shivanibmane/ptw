import { Checkbox } from "@/components/ui/checkbox"
import FileUploader from "../FileUploader"
import { Button } from "@/components/ui/button"
import { useContext, useEffect } from "react"
import { AppContext } from "../AppContext"
import { equipmentCheckPoints } from "./equipment-checkpoints"

const PersonalProtectionEquipmentInput = () => {
  const {
    setIsSelectedVerificationFile, personalProtectionEquipmentFile, setPersonalProtectionEquipmentFile,
    setPersonalProtectionEquipmentUrl, handleFileDelete, handleFileUpload, setEquipmentCheckPointsValue, verificationInputData, }: any = useContext(AppContext)

  const handleCheckboxChange = (id: string) => {
    setEquipmentCheckPointsValue((prev: string[]) =>
      prev?.includes(id)
        ? prev?.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  useEffect(() => {
    setPersonalProtectionEquipmentFile(null); setPersonalProtectionEquipmentUrl(null);
    setIsSelectedVerificationFile(false), setEquipmentCheckPointsValue([])
  }, [equipmentCheckPoints])

  return (
    <div className="px-3 mt-3">
      {equipmentCheckPoints.map((equipmentCheckPoint) => (
        <div className="flex py-2.5 space-x-2" key={equipmentCheckPoint.id} >
          <Checkbox id={equipmentCheckPoint.type}
            onCheckedChange={() => handleCheckboxChange(equipmentCheckPoint?.id)} />
          <label
            htmlFor={equipmentCheckPoint.type}
            className="text-sm font-extralight leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {equipmentCheckPoint.type}
          </label>
        </div>
      ))}
      <div className="py-2">
        <FileUploader
          title="Upload Image"
          fileUpload={(event: any) => handleFileUpload(event, setPersonalProtectionEquipmentFile, setPersonalProtectionEquipmentUrl)}
          imageFile={personalProtectionEquipmentFile}
          deleteFile={() => handleFileDelete(setPersonalProtectionEquipmentFile, setPersonalProtectionEquipmentUrl)}
        />
        {personalProtectionEquipmentFile && <Button variant="destructive" onClick={() =>
          verificationInputData("detect-ppe", personalProtectionEquipmentFile)
        }>Process</Button>}
      </div>
    </div >
  )
}

export default PersonalProtectionEquipmentInput

