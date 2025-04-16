import { useContext, useEffect } from "react";
import FileUploader from "../FileUploader";
import { Button } from "../ui/button";
import { AppContext } from "../AppContext";

const ToolsSafetyInput = () => {
  const { handleFileUpload, handleFileDelete, toolsSafetyFile, setToolsSafetyFile, setToolsSafetyUrl, setIsSelectedVerificationFile, verificationInputData }: any = useContext(AppContext)

  useEffect(() => {
    setToolsSafetyFile(null);
    setToolsSafetyUrl(null)
    setIsSelectedVerificationFile(false)
  }, [])

  return (
    <div className="px-3 mt-3">
      <div className="space-y-3 mt-3">
        <FileUploader
          title="Upload Tools Image"
          fileUpload={(event: any) => { handleFileUpload(event, setToolsSafetyFile, setToolsSafetyUrl) }}
          imageFile={toolsSafetyFile}
          deleteFile={() => handleFileDelete(setToolsSafetyFile, setToolsSafetyUrl)}
        />{toolsSafetyFile && <Button variant="destructive" className="my-2" onClick={() => verificationInputData("http://localhost:8000/api/detect-tools", toolsSafetyFile)}>Process</Button>}
      </div>
    </div>
  )
}

export default ToolsSafetyInput



