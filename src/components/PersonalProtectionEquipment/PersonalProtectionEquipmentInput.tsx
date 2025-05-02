import { Checkbox } from "@/components/ui/checkbox"
import FileUploader from "../FileUploader"
import { Button } from "@/components/ui/button"
import { useContext, useEffect } from "react"
import { AppContext } from "../AppContext"

export const equipmentCheckPoints = [{ id: "safety-shoe", type: "Safety Shoe" }, { id: "reflective-verst ", type: "Reflective Vest" }, { id: "safety-helment", type: "Safety Helmet" }, { id: "body-harness", type: "Body Harness" }, { id: "hande-protection", type: "Hand Protection" }];
const PersonalProtectionEquipmentInput = () => {
  const {
    setIsSelectedVerificationFile, personalProtectionEquipmentFile, setPersonalProtectionEquipmentFile,
    setPersonalProtectionEquipmentUrl, handleFileDelete, handleFileUpload, equipmentCheckPointsValue, setEquipmentCheckPointsValue, setVerificationOutputValues, }: any = useContext(AppContext)

  const verificationInputData = async (endpoint: any, files: any) => {
    setIsSelectedVerificationFile(true)
    try {
      const formData = new FormData()
      if (files instanceof File || files instanceof Blob) {

        formData.append("imageFile", files);
        formData.append("equipmentCheckPoints", JSON.stringify(equipmentCheckPointsValue))
      }
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
      })
      const data = await response.json()
      console.log("data", data)
      await setVerificationOutputValues(data)


    } catch (e) { console.log(e) }
  }
  console.log("equipmentCheckPointsValue", equipmentCheckPointsValue)

  const handleCheckboxChange = (id: string) => {
    setEquipmentCheckPointsValue((prev: string[]) =>
      prev?.includes(id)
        ? prev?.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  useEffect(() => {
    setPersonalProtectionEquipmentFile(null); setPersonalProtectionEquipmentUrl(null);
    setIsSelectedVerificationFile(false)
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
          title="Upload ID Card Image"
          fileUpload={(event: any) => handleFileUpload(event, setPersonalProtectionEquipmentFile, setPersonalProtectionEquipmentUrl)}
          imageFile={personalProtectionEquipmentFile}
          deleteFile={() => handleFileDelete(setPersonalProtectionEquipmentFile, setPersonalProtectionEquipmentUrl)}
        />
        {personalProtectionEquipmentFile && <Button variant="destructive" onClick={() => { verificationInputData("/ppe-safety", personalProtectionEquipmentFile) }}>Process</Button>}
      </div>
    </div >
  )
}

export default PersonalProtectionEquipmentInput

