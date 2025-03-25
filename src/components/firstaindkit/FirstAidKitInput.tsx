import { useContext } from "react";
import { Button } from "../ui/button";
import { AppContext } from "../AppContext";
import FileUploader from "../FileUploader";

const FirstAidKitInput = () => {
  const { handleFileDelete, handleFileUpload, firstAidKitImageFile, setfirstAidKitImageFile, setfirstAidKitImageUrl }: any = useContext(AppContext)

  return (
    <div className="px-3 mt-3">
      <div className="space-y-3 mt-3">
        <FileUploader
          title="Upload First Aid Box Image"
          fileUpload={(event: any) => { handleFileUpload(event, setfirstAidKitImageFile, setfirstAidKitImageUrl) }}
          imageFile={firstAidKitImageFile}
          deleteFile={() => handleFileDelete(setfirstAidKitImageFile, setfirstAidKitImageUrl)}
        />
        <Button variant="destructive" className="my-2" >Process</Button>
      </div>
    </div>
  )
}
export default FirstAidKitInput;
