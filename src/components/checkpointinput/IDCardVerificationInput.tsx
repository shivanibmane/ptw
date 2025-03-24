import { Checkbox } from "@/components/ui/checkbox"
import FileUploader from "../FileUploader"
import { Button } from "@/components/ui/button"
import { useContext, useState } from "react"
import { AppContext } from "../AppContext"

export const verifactionCheckPointTypes = [{ id: "FaceVer", type: "Face Verification", }, { id: "IDCard", type: "ID Card Verification" }];
const IDCardVerificationInput = () => {
  const {
    idCardImageFile, rawFaceImageFile, setIsSelectedVerificationFile, setIdCardImageFile, setRawFaceImageFile, setIdCardImageUrl,
    setRawFaceImageUrl, handleFileDelete, handleFileUpload, }: any = useContext(AppContext)
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);

  const handleCheckboxChange = (type: any) => {
    setSelectedCheckbox((prev) => (prev === type ? null : type)); // Toggle selection
  };

  return (
    <div className="px-3 mt-3">
      {verifactionCheckPointTypes.map((verifactionCheckPointType) => (
        <div className="flex py-3 space-x-2" key={verifactionCheckPointType.id} >
          <Checkbox id={verifactionCheckPointType.type} checked={selectedCheckbox === verifactionCheckPointType.type}
            onCheckedChange={() => handleCheckboxChange(verifactionCheckPointType.type)} />
          <label
            htmlFor={verifactionCheckPointType.type}
            className="text-sm font-extralight leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {verifactionCheckPointType.type}
          </label>
        </div>
      ))}
      <div>
        <div></div>{selectedCheckbox === "Face Verification" && <div className="space-y-2 ">
          <FileUploader
            title="Upload ID Card Image"
            fileUpload={(event: any) => handleFileUpload(event, setIdCardImageFile, setIdCardImageUrl)}
            imageFile={idCardImageFile}
            deleteFile={() => handleFileDelete(setIdCardImageFile, setIdCardImageUrl)}
          />
          <FileUploader
            title="Upload Person Image"
            fileUpload={(event: any) => handleFileUpload(event, setRawFaceImageFile, setRawFaceImageUrl)}
            imageFile={rawFaceImageFile}
            deleteFile={() => handleFileDelete(setRawFaceImageFile, setRawFaceImageUrl)}
          />
          {idCardImageFile && rawFaceImageFile && <Button variant="destructive" onClick={() => { setIsSelectedVerificationFile(true) }}>Process</Button>}
        </div>}</div>
    </div >
  )
}

export default IDCardVerificationInput
