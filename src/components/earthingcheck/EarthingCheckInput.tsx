import { useContext, useEffect } from "react";
import { AppContext } from "../AppContext";
import FileUploader from "../FileUploader";
import { Button } from "../ui/button";

const EarthingCheckInput = () => {
  const { handleFileUpload, handleFileDelete, earthingCheckFile, setEarthingCheckFile,
    earthingCheckUrl, setEarthingCheckUrl, setIsSelectedVerificationFile, verificationInputData }: any = useContext(AppContext)

  useEffect(() => {
    setEarthingCheckFile(null);
    setEarthingCheckUrl(null)
    setIsSelectedVerificationFile(null)
  }, [])

  return (
    <div className="px-3 mt-3">
      <div className="space-y-3 mt-3">
        <FileUploader
          title="Upload Earthing Check Image"
          fileUpload={(event: any) => { handleFileUpload(event, setEarthingCheckFile, setEarthingCheckUrl) }}
          imageFile={earthingCheckFile}
          deleteFile={() => handleFileDelete(setEarthingCheckFile, setEarthingCheckUrl)}
        />{earthingCheckFile && <Button variant="destructive" className="my-2" onClick={() => verificationInputData("/earthing-check", { earthingCheckUrl: earthingCheckUrl })}>Process</Button>}
      </div>
    </div>
  )
}
export default EarthingCheckInput
