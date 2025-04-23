import { useContext, useEffect } from "react";
import { AppContext } from "../AppContext";
import FileUploader from "../FileUploader";
import { Button } from "../ui/button";

const DerrickInput = () => {
  const { handleFileUpload, handleFileDelete, derrickFile, setDerrickFile,
    setDerrickUrl, setIsSelectedVerificationFile, verificationInputData }: any = useContext(AppContext)

  useEffect(() => {
    setDerrickFile(null);
    setDerrickUrl(null)
    setIsSelectedVerificationFile(null)
  }, [])

  return (
    <div className="px-3 mt-3">
      <div className="space-y-3 mt-3">
        <FileUploader
          title="Upload Derrick Image"
          fileUpload={(event: any) => { handleFileUpload(event, setDerrickFile, setDerrickUrl) }}
          imageFile={derrickFile}
          deleteFile={() => handleFileDelete(setDerrickFile, setDerrickUrl)}
        />{derrickFile && <Button variant="destructive" className="my-2" onClick={() => verificationInputData("http://localhost:8000/api/detect-derrick", derrickFile)}>Process</Button>}
      </div>
    </div>
  )
}

export default DerrickInput
