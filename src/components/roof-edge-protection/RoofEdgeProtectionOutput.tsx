import { useContext } from "react"
import { AppContext } from "../AppContext"
import RoofEdgeProtectionOutputCard from "./RoofEdgeProtectionOutputCard"
import Loader from "../Loader"

const RoofEdgeProtectionOutput = () => {
  const { verificationOutputValues, isLoading }: any = useContext(AppContext)

  if (isLoading) {
    return <div className="flex justify-center items-center" ><Loader /></div>
  }
  return (
    <div className="flex flex-col gap-4 items-center ">
      <div className="flex flex-col xl:flex-row gap-5 justify-center items-center mt-9 xl:mt-9 " >
        <RoofEdgeProtectionOutputCard roofEdgeDecteionData={verificationOutputValues?.roofWallDetection
        } title="Roof-edge Wall Detection" />
        <RoofEdgeProtectionOutputCard roofEdgeDecteionData={verificationOutputValues?.roofRailingDetection} title="Roof-edge Railling Detection" />
      </div >
      <div className={`flex flex-col border items-center justify-center w-[300px] h-[100px] px-8 gap-3
              ${verificationOutputValues?.finalAnalysis === "Compliance" ? "bg-green-300" : "bg-red-200"}   rounded-sm`}>
        <h1 className="font-bold text-md">Final Analysis
        </h1>
        <p className="text-md font-semibold">{verificationOutputValues?.finalAnalysis}</p>
      </div>
      <div className={`flex gap-1 ${verificationOutputValues?.finalAnalysis === "Compliance" ? "bg-green-300" : "bg-red-200"} border w-9/12 xl:w-11/12 py-2 px-2 my-2`}>
        <h3 className="font-medium">Reason:</h3>
        <p>{verificationOutputValues?.reason}
        </p>
      </div>
    </div>
  )
}

export default RoofEdgeProtectionOutput
