import { useContext } from "react"
import { AppContext } from "../AppContext"
import Loader from "../Loader"

const BarricadeSiteOutput = () => {
  const { verificationOutputValues, isLoading }: any = useContext(AppContext)
  const barricadeDetectionData = verificationOutputValues?.detections?.find((detection: any) => detection.detection_cls
    === "barricade")

  if (isLoading) {
    return <div className="flex justify-center items-center" ><Loader /></div>
  }

  return (!isLoading &&
    <div className="flex flex-col gap-4 items-center ">
      <div className="flex flex-col xl:flex-row gap-5 justify-center mt-9 xl:mt-9 " >
        <div className={`flex flex-col border items-center  w-[300px] h-[100px]  justify-center py-3  px-8 gap-3 ${barricadeDetectionData?.detection_status
          === true ? "bg-green-200" : "bg-red-100"} rounded-sm`}>
          <h1 className="font-bold text-md">Barricade Detection
          </h1>
          <p className="text-md font-semibold">{barricadeDetectionData?.detection_status === true
            ? "True" : "False"}</p>
        </div>
        <div className={`flex flex-col border items-center w-[300px] h-[100px] justify-center py-3  px-8  gap-3 ${barricadeDetectionData?.detection_conf
          > 0 ? "bg-yellow-100" : "bg-red-100"} rounded-sm`}>
          <h1 className="font-bold text-md">Avg Detection Confidence
          </h1>
          <p className="text-md font-semibold">{barricadeDetectionData?.detection_conf > 0 ? barricadeDetectionData?.detection_conf
            : 0}%</p>
        </div>
        <div className={`flex flex-col border items-center justify-center w-[300px] h-[100px] px-8 gap-3 ${verificationOutputValues?.finalAnalysis

          === "Compliance" ? "bg-green-300" : "bg-red-200"}   rounded-sm`}>
          <h1 className="font-bold text-md">Final Analysis
          </h1>
          <p className="text-md font-semibold">{verificationOutputValues?.finalAnalysis}</p>
        </div>
      </div >
      <div className={`flex gap-1 ${verificationOutputValues?.is_compliant === true
        ? "bg-green-300" : "bg-red-200"} border w-9/12 py-2 px-2 my-2`}>
        <h3 className="font-medium">Reason:</h3>
        <p>{verificationOutputValues?.reason}
        </p>
      </div>
    </div>
  )
}
export default BarricadeSiteOutput
