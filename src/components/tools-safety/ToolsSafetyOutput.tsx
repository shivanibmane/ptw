import { useContext } from "react"
import { AppContext } from "../AppContext"
import Loader from "../Loader"
import ToolsSafetyOutputCard from "../tools-safety/ToolsSafetyOutputCard"

const ToolsSafetyOutput = () => {
  const { verificationOutputValues, isLoading }: any = useContext(AppContext)
  const nonInsulatedTools = verificationOutputValues?.detection?.filter((detectedItems: any) => detectedItems?.detection_cls === "non-insulated-tool")
  const insulatedTools = verificationOutputValues?.detection?.filter((detectedItems: any) => detectedItems?.detection_cls === "insulated-tool")
  const totalToolsCount = verificationOutputValues?.non_insulated_tools_count +
    verificationOutputValues?.insulated_tools_count

  if (isLoading) {
    return <div className="flex justify-center items-center" ><Loader /></div>
  }

  return (!isLoading &&
    <div className="mb-3 space-y-2.5 flex flex-col  items-center">
      <ToolsSafetyOutputCard toolsDetectionCount={verificationOutputValues?.insulated_tools_count} toolsDetectionTitle={"Insulated Tools "} totalToolsDetectionTitle={"Total Insulated Tools"} avgDetection={insulatedTools?.length} totalToolsDetectionCount={totalToolsCount} />
      <ToolsSafetyOutputCard toolsDetectionCount={verificationOutputValues?.non_insulated_tools_count} toolsDetectionTitle={"Non Insulated Tools "} totalToolsDetectionTitle={"Total Non Insulated Tools"} avgDetection={nonInsulatedTools?.length} totalToolsDetectionCount={totalToolsCount} />
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
      <div className={`flex gap-1 w-full  ${verificationOutputValues?.
        is_compliant === true ? "bg-green-300" : "bg-red-200"} border  py-2 px-2`}>
        <p><strong className="font-medium">Reason: </strong>{verificationOutputValues?.reason}
        </p>
      </div>
    </div >
  )
}
export default ToolsSafetyOutput
