
import { Checkbox } from "@/components/ui/checkbox"
import FileUploder from "./FileUploder"
import { Button } from "@/components/ui/button"
import { useContext, } from "react"
import { AppContext } from "./AppContext"

const IDVerification = () => {
  const { idCardImageFileUpload,
    rawFaceImageFileUpload,
    idCardImageFile, rawFaceImageFile }: any = useContext(AppContext)
  const verifactionCondition = [{ id: "FaceVer", condition: "Face verification" }, { id: "IDCard", condition: "ID card verification" }];
  return (
    <div className="px-3">
      {verifactionCondition.map((verifactionCondition) => (
        <div className="flex py-3 space-x-2" key={verifactionCondition.id}>
          <Checkbox id={verifactionCondition.id} />
          <label
            htmlFor={verifactionCondition.id}
            className="text-sm font-extralight leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {verifactionCondition.condition}
          </label>
        </div>
      ))}
      <div className="space-y-3 ">
        <FileUploder title="Upload ID Card Image" fileUpload={idCardImageFileUpload} imageFile={idCardImageFile} />
        <FileUploder title="Upload Person Image" fileUpload={rawFaceImageFileUpload} imageFile={rawFaceImageFile} />
      </div>
      <Button variant="destructive" className="mt-4">Process</Button>
    </div>
  )
}

export default IDVerification
