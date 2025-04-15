import { useContext } from "react"
import { AppContext } from "../AppContext"
// import ToolsSafetyOutputCard from "./ToolsSafetyOutputCard"

const ToolsSafetyOutput = () => {
  const { verificationOutputValues, isLoading }: any = useContext(AppContext)
  const nonInsulatedTools = verificationOutputValues?.detectionData?.filter((detection: any) => detection?.detection_cls === "non-insulated-tool")
  const insulatedTools = verificationOutputValues?.detectionData?.filter((detection: any) => detection?.detection_cls === "insulated-tool")
  const totalToolsCount = verificationOutputValues?.insulated_tools +
    verificationOutputValues?.non_insulated_tools


  if (isLoading) {
    return <>Loading...</>
  }

  return (!isLoading &&
    <div className="mb-3 space-y-2.5 flex flex-col  items-center">
      <div className="flex flex-col xl:flex-row gap-5">
        <div className={`flex flex-col border w-[300px] items-center justify-center px-8 h-[100px] gap-3 rounded-sm ${verificationOutputValues?.insulated_tools
          > 0 ? "bg-green-200" : "bg-red-100"}`}>
          <h1 className="font-bold text-md">{"Insulated Tools "}
          </h1>
          <p className="text-md font-semibold">{verificationOutputValues?.insulated_tools > 0 ? "True" : "False"}</p>
        </div>
        <div className={`flex flex-col border w-[300px]  items-center justify-center px-8 h-[100px] gap-3 ${verificationOutputValues?.insulated_tools
          ? "bg-yellow-100" : "bg-red-100"} rounded-sm text-center`}>
          <h1 className="font-bold text-md">{"Total Insulated Tools"}
          </h1>
          <p className="text-md font-semibold">{verificationOutputValues?.insulated_tools}</p>
        </div>
        <div className={`flex flex-col border w-[300px]  items-center justify-center px-8 h-[100px] gap-3 ${insulatedTools?.length > 0 ? "bg-yellow-100" : "bg-red-100"} rounded-sm`}>
          <h1 className="font-bold text-md">
            Avg Detection Config
          </h1>
          <p className="text-md font-semibold">{Math.round(insulatedTools?.length / totalToolsCount * 100) || 0}%</p>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-5">
        <div className={`flex flex-col border w-[300px] items-center justify-center px-8 h-[100px] gap-3 rounded-sm ${verificationOutputValues?.non_insulated_tools
          > 0 ? "bg-green-200" : "bg-red-100"}`}>
          <h1 className="font-bold text-md">{"Non-Insulated Tools "}
          </h1>
          <p className="text-md font-semibold">{verificationOutputValues?.non_insulated_tools > 0 ? "True" : "False"}</p>
        </div>
        <div className={`flex flex-col border w-[300px]  items-center justify-center px-8 h-[100px] gap-3 ${verificationOutputValues?.non_insulated_tools
          ? "bg-yellow-100" : "bg-red-100"} rounded-sm text-center`}>
          <h1 className="font-bold text-md">{"Total Non-Insulated Tools"}
          </h1>
          <p className="text-md font-semibold">{verificationOutputValues?.non_insulated_tools}</p>
        </div>
        <div className={`flex flex-col border w-[300px]  items-center justify-center px-8 h-[100px] gap-3 ${nonInsulatedTools?.length > 0 ? "bg-yellow-100" : "bg-red-100"} rounded-sm`}>
          <h1 className="font-bold text-md">
            Avg Detection Config
          </h1>
          <p className="text-md font-semibold">{Math.round(nonInsulatedTools?.length / totalToolsCount * 100) || 0}%</p>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row justify-center gap-5">
        <div className={`flex flex-col border w-[300px] items-center justify-center px-8 h-[100px] gap-3  rounded-sm ${totalToolsCount > 0 ? "bg-yellow-100" : "bg-red-100"}`}>
          <h1 className="font-bold text-md">Total Tools Detection
          </h1>
          <p className="text-md font-semibold">{totalToolsCount}</p>
        </div>
        <div className={`flex flex-col border w-[300px]  items-center justify-center px-8 h-[100px] gap-3  rounded-sm ${verificationOutputValues?.finalAnalysis === "Compliance" ? "bg-green-300" : "bg-red-200"}`}>
          <h1 className="font-bold text-md">Final Analysis
          </h1>
          <p className="text-md font-semibold">{verificationOutputValues?.finalAnalysis}</p>
        </div>
      </div>
      <div className={`flex gap-1 w-9/12 xl:w-full ${verificationOutputValues?.finalAnalysis === "Compliance" ? "bg-green-300" : "bg-red-200"} border  py-2 px-2`}>
        <p><strong className="font-medium">Reason: </strong>{verificationOutputValues?.reason}
        </p>
      </div>
    </div >
  )
}
export default ToolsSafetyOutput
