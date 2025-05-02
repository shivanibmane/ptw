import { useContext, useEffect } from "react";
import FileUploader from "../FileUploader";
import { Button } from "../ui/button";
import { AppContext } from "../AppContext";

const NeutralEarthVoltageCheckInput = () => {
  const { handleFileUpload, handleFileDelete, neutralEarthVoltageCheckFile, setNeutralEarthVoltageCheckFile,
    setNeutralEarthVoltageCheckUrl, setIsSelectedVerificationFile, verificationInputData }: any = useContext(AppContext)

  useEffect(() => {
    setNeutralEarthVoltageCheckFile(null);
    setNeutralEarthVoltageCheckUrl(null)
    setIsSelectedVerificationFile(null)
  }, [])

  return (
    <div className="px-3 mt-3">
      <div className="space-y-3 mt-3">
        <FileUploader
          title="Upload N-E Voltage Check Image"
          fileUpload={(event: any) => { handleFileUpload(event, setNeutralEarthVoltageCheckFile, setNeutralEarthVoltageCheckUrl) }}
          imageFile={neutralEarthVoltageCheckFile}
          deleteFile={() => handleFileDelete(setNeutralEarthVoltageCheckFile, setNeutralEarthVoltageCheckUrl)}
        />{neutralEarthVoltageCheckFile && <Button variant="destructive" className="my-2" onClick={() => verificationInputData("check-voltage", neutralEarthVoltageCheckFile)}>Process</Button>}
      </div>
    </div>
  )
}

export default NeutralEarthVoltageCheckInput
