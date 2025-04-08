import { useContext } from "react"
import { AppContext } from "../AppContext"
import ToolsSafetyOutputCard from "./ToolsSafetyOutputCard"

const ToolsSafetyOutput = () => {
  const { verificationOutputValues }: any = useContext(AppContext)
  return (
    <div className="mb-3 space-y-2.5 ">
      <ToolsSafetyOutputCard toolsOutputData={verificationOutputValues} />
      <div className="flex flex-col xl:flex-row justify-center gap-5">
        <div className={`flex flex-col border w-[300px] items-center justify-center px-8 h-[100px] gap-3  rounded-sm ${verificationOutputValues?.totalTools ? "bg-yellow-100" : "bg-red-100"}`}>
          <h1 className="font-bold text-md">Total Tools Detection
          </h1>
          <p className="text-md font-semibold">{verificationOutputValues?.totalTools}</p>
        </div>
        <div className={`flex flex-col border w-[300px]  items-center justify-center px-8 h-[100px] gap-3  rounded-sm ${verificationOutputValues?.finalAnalysis === "Compliance" ? "bg-green-300" : "bg-red-200"}`}>
          <h1 className="font-bold text-md">Final Analysis
          </h1>
          <p className="text-md font-semibold">{verificationOutputValues?.finalAnalysis}</p>
        </div>
      </div>
      <div className={`flex gap-1 ${verificationOutputValues?.finalAnalysis === "Compliance" ? "bg-green-300" : "bg-red-200"} border  py-2 px-2`}>
        <h3 className="font-medium">Reason: </h3>
        <p>{verificationOutputValues?.reason}
        </p>
      </div>
    </div >
  )
}
export default ToolsSafetyOutput
