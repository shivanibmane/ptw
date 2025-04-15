import { useContext } from "react"
import { AppContext } from "../AppContext"
import DerrickOutputCard from "./DerrickOutputCard"

const DerrickOutput = () => {
  const { verificationOutputValues, isLoading }: any = useContext(AppContext)
  const derrickDetectData = verificationOutputValues?.detections

  if (isLoading) {
    return <div>Loading...</div>
  }
  return (!isLoading &&
    <>
      <div className="flex flex-col gap-4 items-center">
        <div className="flex flex-col gap-5 justify-center items-center mt-9 xl:mt-9 " >
          <DerrickOutputCard isDetected={derrickDetectData?.derrick_detected} detectionCount={derrickDetectData?.derrick_count} avgConfig={derrickDetectData?.derrick_avg_conf} title="Total Derrick Count" validationTitle="Derrick Detection" />
          <DerrickOutputCard isDetected={derrickDetectData?.pole_detected} detectionCount={derrickDetectData?.pole_count} avgConfig={derrickDetectData?.pole_avg_conf} title="Total Pole Count" validationTitle="Pole Detection" />

          {/* change code later */}

          <div className={`flex flex-col border items-center justify-center w-[300px] h-[100px] px-8 gap-3
             ${derrickDetectData?.pole_detected === true || derrickDetectData?.derrick_detected === true ? "bg-green-300" : "bg-red-200"}   rounded-sm`}>
            <h1 className="font-bold text-md">Final Analysis
            </h1>
            <p className="text-md font-semibold">{verificationOutputValues?.finalAnalysis}</p>
          </div>
        </div >
        <div className={`flex gap-1 ${derrickDetectData?.pole_detected === true || derrickDetectData?.derrick_detected === true ? "bg-green-300" : "bg-red-200"} border w-9/12 py-2 px-2 my-2`}>
          <h3 className="font-medium">Reason:</h3>
          <p>{"Detected "}
          </p>
        </div>
      </div>

    </>
  )
}

export default DerrickOutput
