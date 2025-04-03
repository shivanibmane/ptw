import { Checkbox } from "@/components/ui/checkbox"
import FileUploader from "../FileUploader"
import { Button } from "@/components/ui/button"
import { useContext, useEffect } from "react"
import { AppContext } from "../AppContext"

export const verifactionCheckPointTypes = [{ id: "face-verification", type: "Face Verification" }, { id: "id-card-verifications", type: "ID Card Verification" },];
const IDCardVerificationInput = () => {
  const {
    idCardImageFile, idCardImageUrl, rawFaceImageUrl, rawFaceImageFile, setIsSelectedVerificationFile, setIdCardImageFile, setRawFaceImageFile, setIdCardImageUrl,
    setRawFaceImageUrl, handleFileDelete, handleFileUpload, selectedCheckbox, setSelectedCheckbox, verificationInputData }: any = useContext(AppContext)

  let selectedCheckPointInput;

  const handleCheckboxChange = (type: any) => {
    setSelectedCheckbox((prev: any) => (prev === type ? null : type));
  };

  useEffect(() => {
    setIdCardImageFile(null); setRawFaceImageFile(null); setIdCardImageUrl(null);
    setRawFaceImageUrl(null); setIsSelectedVerificationFile(false)
  }, [selectedCheckbox])

  if (selectedCheckbox === "Face Verification") {
    selectedCheckPointInput = <div className="space-y-2 ">
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
      {idCardImageFile && rawFaceImageFile && <Button variant="destructive" onClick={() => { verificationInputData("/id-card-verification", { type: selectedCheckbox, idCardUrl: idCardImageUrl, rawFaceImageUrl: rawFaceImageUrl }) }}>Process</Button>}
    </div>
  } else if (selectedCheckbox === "ID Card Verification") {
    selectedCheckPointInput = <div>
      <FileUploader
        title="Upload ID Card Image"
        fileUpload={(event: any) => handleFileUpload(event, setIdCardImageFile, setIdCardImageUrl)}
        imageFile={idCardImageFile}
        deleteFile={() => handleFileDelete(setIdCardImageFile, setIdCardImageUrl)}
      />
      {idCardImageFile && <Button variant="destructive" onClick={() => { verificationInputData("/id-card-verification", { type: selectedCheckbox, idCardUrl: idCardImageUrl }) }}>Process</Button>}
    </div>
  }

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
        {selectedCheckPointInput}
      </div>
    </div >
  )
}

export default IDCardVerificationInput

