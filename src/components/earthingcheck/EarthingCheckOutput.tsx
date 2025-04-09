import { useContext } from "react"
import { AppContext } from "../AppContext"

const EarthingCheckOutput = () => {
  const { verificationOutputValues }: any = useContext(AppContext)


  return (
    <div className="flex flex-col gap-4 items-center ">
      <div className="flex flex-col xl:flex-row gap-5 justify-center mt-9 xl:mt-9 " >
        <div className={`flex flex-col border items-center  w-[300px] h-[100px]  justify-center py-3  px-8 gap-3 ${verificationOutputValues?.earthingDetection?.isDetected === true ? "bg-green-200" : "bg-red-100"} rounded-sm`}>
          <h1 className="font-bold text-md">Earthing Detection
          </h1>
          <p className="text-md font-semibold">{verificationOutputValues?.earthingDetection?.isDetected ? "True" : "False"}</p>
        </div>
        <div className={`flex flex-col border text-center items-center w-[300px] h-[100px] justify-center py-3  px-8  gap-3 ${verificationOutputValues?.earthingDetection?.detetionCount > 0 ? "bg-yellow-100" : "bg-red-100"} rounded-sm`}>
          <h1 className="font-bold text-md">Total Earthing Connection Point
          </h1>
          <p className="text-md font-semibold">{verificationOutputValues?.earthingDetection?.detetionCount
          }</p>
        </div>
        <div className={`flex flex-col border items-center w-[300px] h-[100px] justify-center py-3  px-8  gap-3 ${verificationOutputValues?.earthingDetection?.avgDetection > 0 ? "bg-yellow-100" : "bg-red-100"} rounded-sm`}>
          <h1 className="font-bold text-md">Avg Detection Confg
          </h1>
          <p className="text-md font-semibold">{verificationOutputValues?.earthingDetection?.avgDetection}</p>
        </div>
        <div className={`flex flex-col border items-center justify-center w-[300px] h-[100px] px-8 gap-3
             ${verificationOutputValues?.finalAnalysis === "Compliance" ? "bg-green-300" : "bg-red-200"}   rounded-sm`}>
          <h1 className="font-bold text-md">Final Analysis
          </h1>
          <p className="text-md font-semibold">{verificationOutputValues?.finalAnalysis}</p>
        </div>
      </div >
      <div className={`flex gap-1 ${verificationOutputValues?.finalAnalysis === "Compliance" ? "bg-green-300" : "bg-red-200"} border w-9/12 py-2 px-2 my-2`}>
        <h3 className="font-medium">Reason:</h3>
        <p>{verificationOutputValues?.reason}
        </p>
      </div>
    </div>
  )
}

export default EarthingCheckOutput
