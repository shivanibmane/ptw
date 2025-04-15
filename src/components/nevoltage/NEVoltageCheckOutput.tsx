import { useContext } from "react"
import { AppContext } from "../AppContext"

const NEVoltageCheckOutput = () => {
  const { verificationOutputValues, isLoading }: any = useContext(AppContext)
  const neVoltageOutputData = verificationOutputValues?.detections?.find((detection: any) => detection?.detection_cls === "display")


  if (isLoading) {
    return <div>Loading...</div>
  }
  return (!isLoading &&
    <>
      <div className="flex flex-col gap-4 items-center ">
        <div className="flex flex-col xl:flex-row gap-5 justify-center mt-9 xl:mt-9 " >
          <div className={`flex flex-col border items-center  w-[300px] h-[100px]  justify-center py-3  px-8 gap-3 ${neVoltageOutputData?.voltage > 5 || neVoltageOutputData?.voltage === "N/A" || verificationOutputValues?.detections?.length === 0
            ? "bg-red-100" : "bg-yellow-100"} rounded-sm`}>
            <h1 className="font-bold text-md">Extracted Voltage
            </h1>
            <p className="text-md font-semibold">{neVoltageOutputData?.voltage === "N/A" || verificationOutputValues?.detections?.length === 0 ? "N/A" : Number(neVoltageOutputData?.voltage).toString()
            }</p>
          </div>
          <div className={`flex flex-col border items-center w-[300px] h-[100px] justify-center py-3  px-8  gap-3 ${neVoltageOutputData?.voltage_validation === true ? "bg-green-200" : "bg-red-100"} rounded-sm`}>
            <h1 className="font-bold text-md">N-E Voltage Validation
            </h1>
            <p className="text-md font-semibold">{neVoltageOutputData?.voltage_validation
              === true ? "True" : "False"}</p>
          </div>

          {/* Change the code later  */}

          <div className={`flex flex-col border items-center justify-center w-[300px] h-[100px] px-8 gap-3
           ${neVoltageOutputData?.voltage_validation
              === true ? "bg-green-300" : "bg-red-200"}   rounded-sm`}>
            <h1 className="font-bold text-md">Final Analysis
            </h1>
            <p className="text-md font-semibold">{neVoltageOutputData?.voltage_validation === true ? "Compliance" : "Non-compliance"}</p>
          </div>
        </div >
        <div className={`flex gap-1 ${neVoltageOutputData?.voltage_validation ? "bg-green-300" : "bg-red-200"} border w-9/12 py-2 px-2 my-2`}>
          <h3 className="font-medium">Reason:</h3>
          <p>{neVoltageOutputData?.voltage_validation === true ? "Valid Voltage" : "Voltage is not safe"}
          </p>
        </div>
      </div>

    </>
  )
}

export default NEVoltageCheckOutput
