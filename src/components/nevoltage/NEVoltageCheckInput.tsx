import { useContext, useEffect } from "react";
import FileUploader from "../FileUploader";
import { Button } from "../ui/button";
import { AppContext } from "../AppContext";

const NEVoltageCheckInput = () => {
  const { handleFileUpload, handleFileDelete, nevoltageCheckFile, setNEVoltageCheckFile,
    nevoltageCheckUrl, setNEVoltageCheckUrl, setIsSelectedVerificationFile, verificationInputData }: any = useContext(AppContext)

  useEffect(() => {
    setNEVoltageCheckFile(null);
    setNEVoltageCheckUrl(null)
    setIsSelectedVerificationFile(null)
  }, [])

  return (
    <div className="px-3 mt-3">
      <div className="space-y-3 mt-3">
        <FileUploader
          title="Upload N-E Voltage Check Image"
          fileUpload={(event: any) => { handleFileUpload(event, setNEVoltageCheckFile, setNEVoltageCheckUrl) }}
          imageFile={nevoltageCheckFile}
          deleteFile={() => handleFileDelete(setNEVoltageCheckFile, setNEVoltageCheckUrl)}
        />{nevoltageCheckFile && <Button variant="destructive" className="my-2" onClick={() => verificationInputData("/ne-voltage-check", { nevoltageCheckUrl: nevoltageCheckUrl })}>Process</Button>}
      </div>
    </div>
  )
}

export default NEVoltageCheckInput
