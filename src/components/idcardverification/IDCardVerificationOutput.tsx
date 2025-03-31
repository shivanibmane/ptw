import { useContext } from "react"
import { AppContext } from "../AppContext"

const IDVerificationOutput = () => {
  const { selectedCheckbox, verificationOutputValues, isLoading }: any = useContext(AppContext)
  let selectedCheckPointOutput;


  if (selectedCheckbox === "Face Verification") {
    selectedCheckPointOutput =
      <div className="flex flex-col justify-between lg:w-[300px] h-[400px] gap-5 p-3" >
        <div className="flex flex-col border items-center justify-center py-3  px-8 h-[100px] gap-3 bg-yellow-100 rounded-sm">
          <h1 className="font-bold text-md">Face Matching Distance
          </h1>
          <p className="text-md font-semibold">{verificationOutputValues?.faceMatchingDistance}</p>
        </div>
        <div className={`flex flex-col border items-center justify-center px-8 h-[100px] gap-3
           ${verificationOutputValues?.faceMatchingDistance < 1 ? "bg-green-200" : "bg-red-100"}   rounded-sm`}>
          <h1 className="font-bold text-md">Final Analysis
          </h1>
          <p className="text-md font-semibold">{verificationOutputValues?.finalAnalysis}</p>
        </div>
        <div className={`flex gap-1 ${verificationOutputValues?.faceMatchingDistance < 1 ? "bg-green-200" : "bg-red-100"} border  py-2 px-2`}>
          <h3 className="font-medium">Reason: </h3>
          <p>{verificationOutputValues?.reason}
          </p>
        </div>
      </div >
  } else if (selectedCheckbox === "ID Card Verification") {
    selectedCheckPointOutput = <>
      <div className="flex flex-col   xl:flex-row justify-between gap-5">
        <div className="flex flex-col border items-center justify-center py-3 sm:w-[300px] xl:w-[200px]  px-8 h-[100px] gap-3 bg-yellow-100 rounded-sm">
          <h1 className="font-bold text-md">Course
          </h1>
          <p className="text-md font-semibold">{verificationOutputValues?.course}</p>
        </div>
        <div className={`flex flex-col border items-center justify-center px-8 xl:w-[200px]  h-[100px] gap-3 bg-yellow-100 rounded-sm`}>
          <h1 className="font-bold text-md">Designation
          </h1>
          <p className="text-md font-semibold">{verificationOutputValues?.designation}</p>
        </div>
        <div className="flex flex-col border items-center justify-center py-3 xl:w-[200px]   px-8 h-[100px] gap-3 bg-yellow-100 rounded-sm">
          <h1 className="font-bold text-md">Validation Upto
          </h1>
          <p className="text-md font-semibold">{verificationOutputValues?.validationUpto}</p>
        </div>
        <div className={`flex flex-col border items-center justify-center xl:w-[200px]  px-8 h-[100px] gap-3 ${verificationOutputValues?.dataValidation === true ? "bg-green-200" : "bg-red-100"}  rounded-sm`}>
          <h1 className="font-bold text-md">Validation Date
          </h1>
          <p className="text-md font-semibold">{verificationOutputValues?.dataValidation === true ? "True" : "False"}</p>
        </div>
        <div className={`flex flex-col border items-center justify-center w-full xl:w-[200px]  px-8 h-[100px] gap-3 bg-green-300 rounded-sm`}>
          <h1 className="font-bold text-md">Final Analysis
          </h1>
          <p className="text-md font-semibold">{verificationOutputValues?.finalAnalysis}</p>
        </div>
      </div >
      <div className="flex w-9/12 gap-1 bg-green-200 border py-2 my-3 px-2">
        <h3 className="font-medium">Reason: </h3>
        <p>{verificationOutputValues?.reason}
        </p>
      </div>
    </>
  }
  return (
    <>

      {isLoading ? <h1>Loading...</h1> : selectedCheckPointOutput}
    </>

  )
}

export default IDVerificationOutput
