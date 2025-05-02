import { useContext } from "react"
import { AppContext } from "../AppContext"
import IDCardVerificationCard from "./IDCardVerificationCard";
import Loader from "../Loader";

const IDVerificationOutput = () => {
  const { selectedCheckbox, verificationOutputValues, isLoading }: any = useContext(AppContext)

  let selectedCheckPointOutput;
  const today = new Date();

  if (selectedCheckbox === "Face Verification") {
    selectedCheckPointOutput =
      <div className="flex flex-col xl:justify-between w-[300px] h-[400px]  gap-5 mt-9 xl:mt-9" >
        <div className={`flex flex-col border items-center justify-center py-3  px-8 h-[100px] gap-3 ${verificationOutputValues?.accuracy ? "bg-yellow-100" : "bg-red-100"} rounded-sm`}>
          <h1 className="font-bold text-md">Accuracy
          </h1>
          <p className="text-md font-semibold">{verificationOutputValues?.accuracy ? verificationOutputValues.accuracy : "Not Found"}</p>
        </div>
        <div className={`flex flex-col border items-center justify-center px-8 h-[100px] gap-3 ${verificationOutputValues?.finalAnalysis === "Compliance" ? "bg-green-300" : "bg-red-200"}   rounded-sm`}>
          <h1 className="font-bold text-md">Final Analysis
          </h1>
          <p className="text-md font-semibold">{verificationOutputValues?.finalAnalysis}</p>
        </div>
        <div className={`flex gap-1 ${verificationOutputValues?.finalAnalysis === "Compliance" ? "bg-green-300" : "bg-red-200"} border sm:w-fullpy-2  py-2 px-2`}>
          <h3 className="font-medium">Reason: </h3>
          <p>{verificationOutputValues?.reason}
          </p>
        </div>
      </div >
  } else if (selectedCheckbox === "ID Card Verification") {
    selectedCheckPointOutput = <>
      <div className="flex flex-col  xl:flex-row justify-between  gap-5 mt-9 xl:mt-9">
        <IDCardVerificationCard title="Course" value={verificationOutputValues?.course} />
        <IDCardVerificationCard title="Designation" value={verificationOutputValues?.designation} />
        <IDCardVerificationCard title="Validation Upto" value={verificationOutputValues?.validity_date} />
        <div className={`flex flex-col border items-center justify-center sm:w-[300px] xl:w-[250px]  px-8 h-[100px] gap-3 ${verificationOutputValues?.validity_date >= today && verificationOutputValues?.validity_date !== null
          ? "bg-green-200" : "bg-red-100"}  rounded-sm`}>
          <h1 className="font-bold text-md">Validation Date
          </h1>
          <p className="text-md font-semibold">{verificationOutputValues?.validity_date >= today && verificationOutputValues?.validity_date !== null ? "True" : "False"}</p>
        </div>
      </div >
      <div className={`flex flex-col border  items-center justify-center sm:w-[300px] xl:w-[250px]  px-8 h-[100px] gap-3 ${verificationOutputValues?.
        is_valid
        === true ? "bg-green-300" : "bg-red-200"} rounded-sm`}>
        <h1 className="font-bold text-md">Final Analysis
        </h1>
        <p className="text-md font-semibold">{verificationOutputValues?.is_valid
          ? "Compliance" : "Non-Compliance"}</p>
      </div>
      <div className={`flex w-9/12 gap-1 ${verificationOutputValues?.is_valid === true ? "bg-green-300" : "bg-red-200"} border py-2 my-3 px-2`}>
        <h3 className="font-medium">Reason: </h3>
        <p>{verificationOutputValues?.reason}
        </p>
      </div>
    </>
  }
  if (isLoading) {
    return <div className="flex  justify-center items-center" ><Loader /></div>
  }
  return (
    <>

      {!isLoading && selectedCheckPointOutput}
    </>

  )
}

export default IDVerificationOutput
