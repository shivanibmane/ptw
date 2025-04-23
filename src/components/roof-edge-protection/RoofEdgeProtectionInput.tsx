import { useContext, useEffect } from "react";
import FileUploader from "../FileUploader";
import { Button } from "../ui/button";
import { AppContext } from "../AppContext";

const RoofEdgeProtectionInput = () => {
  const { handleFileUpload, handleFileDelete, roofEdgeProtectionFile, setRoofEdgeProtectionFile, setRoofEdgeProtectionUrl, setIsSelectedVerificationFile, verificationInputData }: any = useContext(AppContext)

  useEffect(() => {
    setRoofEdgeProtectionFile(null);
    setRoofEdgeProtectionUrl(null)
    setIsSelectedVerificationFile(false)
  }, [])

  return (
    <div className="px-3 mt-3">
      <div className="space-y-3 mt-3">
        <FileUploader
          title="Upload Roof-edge Image"
          fileUpload={(event: any) => { handleFileUpload(event, setRoofEdgeProtectionFile, setRoofEdgeProtectionUrl) }}
          imageFile={roofEdgeProtectionFile}
          deleteFile={() => handleFileDelete(setRoofEdgeProtectionFile, setRoofEdgeProtectionUrl)}
        />{roofEdgeProtectionFile && <Button variant="destructive" className="my-2" onClick={() => verificationInputData("http://localhost:8000/api/roof-edge-protection", roofEdgeProtectionFile)}>Process</Button>}
      </div>
    </div>
  )
}

export default RoofEdgeProtectionInput
