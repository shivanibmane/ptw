import { useContext, useEffect } from "react";
import { Button } from "../ui/button";
import { AppContext } from "../AppContext";
import FileUploader from "../FileUploader";

const FirstAidKitInput = () => {
  const { handleFileDelete, handleFileUpload, firstAidKitImageFile, setFirstAidKitImageFile, setfirstAidKitImageUrl, setIsSelectedVerificationFile, verificationInputData }: any = useContext(AppContext)

  useEffect(() => {
    setFirstAidKitImageFile(null)
    setfirstAidKitImageUrl(null)
    setIsSelectedVerificationFile(false)
  }, [])

  return (
    <div className="px-3 mt-3">
      <div className="space-y-3 mt-3">
        <FileUploader
          title="Upload First Aid Box Image"
          fileUpload={(event: any) => { handleFileUpload(event, setFirstAidKitImageFile, setfirstAidKitImageUrl) }}
          imageFile={firstAidKitImageFile}
          deleteFile={() => handleFileDelete(setFirstAidKitImageFile, setfirstAidKitImageUrl)}
        />{firstAidKitImageFile && <Button variant="destructive" className="my-2" onClick={() => { verificationInputData('http://localhost:8000/api/first-aid-kit', firstAidKitImageFile) }}>Process</Button>}
      </div>
    </div>
  )
}
export default FirstAidKitInput;
