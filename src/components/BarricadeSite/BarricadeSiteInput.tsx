import { useContext, useEffect } from "react"
import FileUploader from "../FileUploader"
import { AppContext } from "../AppContext"
import { Button } from "../ui/button"

const BarricadeSiteInput = () => {
  const { handleFileUpload, handleFileDelete, barricadeSiteFile, setBarricadeSiteFile, setBarricadeSiteImageUrl, setIsSelectedVerificationFile, verificationInputData }: any = useContext(AppContext)

  useEffect(() => {
    setBarricadeSiteFile(null);
    setBarricadeSiteImageUrl(null)
    setIsSelectedVerificationFile(null)
  }, [])

  return (
    <div className="px-3 mt-3">
      <div className="space-y-3 mt-3">
        <FileUploader
          title="Upload Barricade Site Image"
          fileUpload={(event: any) => { handleFileUpload(event, setBarricadeSiteFile, setBarricadeSiteImageUrl) }}
          imageFile={barricadeSiteFile}
          deleteFile={() => handleFileDelete(setBarricadeSiteFile, setBarricadeSiteImageUrl)}
        />{barricadeSiteFile && <Button variant="destructive" className="my-2" onClick={() => verificationInputData("detect-barricades", barricadeSiteFile)}>Process</Button>}
      </div>
    </div>
  )
}

export default BarricadeSiteInput
