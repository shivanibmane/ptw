import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useRef } from "react"
import { FaRegFile } from "react-icons/fa";


const FileUploder = ({ title, fileUpload, imageFile, }: any) => {
  const inputFileRef: any = useRef(null);
  return (
    <div className="space-y-1">
      <h1 className="font-semibold text-xs">{title}</h1>
      <Card>
        <CardHeader>
          <CardTitle className="font-semibold">Drag and file drag here</CardTitle>
          <CardDescription >Limit 200MB per file • JPG, JPEG, PNG</CardDescription>
        </CardHeader>
        <CardFooter onClick={() => { inputFileRef.current.click(); }}>
          <Button variant="destructive" >Brwoser Files<input
            className="hidden"
            ref={inputFileRef}
            onChange={fileUpload}
            type="file"
          /></Button>
        </CardFooter>
      </Card>
      <div>
        {imageFile &&
          <div className="flex items-center w-full max-w-xs p-4" >
            <FaRegFile className="h-auto w-5 " />
            <div className="ms-3 text-sm font-normal"><p>{imageFile.name}</p><p className="text-xs text-gray-500">{(imageFile.size / 1024).toFixed(2)}KB</p></div>
            <button type="button" className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900  inline-flex items-center justify-center h-8 w-8" aria-label="Close">
              <span className="sr-only">Close</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
            </button>
          </div>
        }
      </div>
    </div>
  )
}

export default FileUploder
