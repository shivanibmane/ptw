import { useContext } from "react"
import { AppContext } from "../AppContext"
import Loader from "../Loader"

const FallRestraintOutput = () => {
  const { verificationOutputValues, isLoading }: any = useContext(AppContext)
  if (isLoading) {
    return <div className="flex justify-center items-center" ><Loader /></div>
  }
  return (!isLoading &&
    <div className="flex flex-col gap-4 items-center ">
      <div className="flex flex-col xl:flex-row gap-5 justify-center mt-9 xl:mt-9 " >
        <div className={`flex flex-col border items-center  w-[300px] h-[100px]  justify-center py-3  px-8 gap-3 ${verificationOutputValues?.isRope === true ? "bg-green-200" : "bg-red-100"} rounded-sm`}>
          <h1 className="font-bold text-md">Rope Detection
          </h1>
          <p className="text-md font-semibold">{verificationOutputValues?.isRope ? "True" : "False"}</p>
        </div>
        <div className={`flex flex-col border items-center w-[300px] h-[100px] justify-center py-3  px-8  gap-3 ${verificationOutputValues?.avgDetection > 0 ? "bg-yellow-100" : "bg-red-100"} rounded-sm`}>
          <h1 className="font-bold text-md">Avg Detection Confidence
          </h1>
          <p className="text-md font-semibold">{verificationOutputValues?.avgDetection ? <>{Math.round(verificationOutputValues.avgDetection)}%</> : "Not Found"}</p>
        </div>
        <div className={`flex flex-col border items-center justify-center w-[300px] h-[100px] px-8 gap-3
             ${verificationOutputValues?.finalAnalysis === "Compliance" ? "bg-green-300" : "bg-red-200"}   rounded-sm`}>
          <h1 className="font-bold text-md">Final Analysis
          </h1>
          <p className="text-md text-center font-semibold">{verificationOutputValues?.finalAnalysis ? verificationOutputValues?.finalAnalysis : "Non-complinace"}</p>
        </div>
      </div >
      <div className={`flex gap-1 ${verificationOutputValues?.finalAnalysis === "Compliance" ? "bg-green-300" : "bg-red-200"} border w-9/12 py-2 px-2 my-2`}>
        <h3 className="font-medium">Reason:</h3>
        <p>{verificationOutputValues?.reason ? verificationOutputValues?.reason : "Not Valid Image"}
        </p>
      </div>
    </div>
  )
}

export default FallRestraintOutput
