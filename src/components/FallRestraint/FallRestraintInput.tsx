import { useContext, useEffect } from "react";
import FileUploader from "../FileUploader";
import { Button } from "../ui/button";
import { AppContext } from "../AppContext";

const FallRestraintInput = () => {
  const { handleFileUpload, handleFileDelete, fallRestraintFile, setFallRestraintFile,
    fallRestraintUrl, setFallRestraintUrl, setIsSelectedVerificationFile, verificationInputData }: any = useContext(AppContext)

  useEffect(() => {
    setFallRestraintFile(null);
    setFallRestraintUrl(null)
    setIsSelectedVerificationFile(null)
  }, [])

  return (
    <div className="px-3 mt-3">
      <div className="space-y-3 mt-3">
        <FileUploader
          title="Upload Fall Restraint Image"
          fileUpload={(event: any) => { handleFileUpload(event, setFallRestraintFile, setFallRestraintUrl) }}
          imageFile={fallRestraintFile}
          deleteFile={() => handleFileDelete(setFallRestraintFile, setFallRestraintUrl)}
        />{fallRestraintFile && <Button variant="destructive" className="my-2" onClick={() => verificationInputData("/fall-restraint", { fallRestraintUrl: fallRestraintUrl })}>Process</Button>}
      </div>
    </div>
  )
}

export default FallRestraintInput
