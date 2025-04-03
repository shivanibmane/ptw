import { useContext } from "react"
import FirstAidKitOutputCard from "./FirstAidKitOutputCard"
import { AppContext } from "../AppContext"


const FirstAidKitOutput = () => {
  const { verificationOutputValues }: any = useContext(AppContext)

  return (
    <div className="mb-3 space-y-2.5 ">
      <FirstAidKitOutputCard firstAidBoxItemsDetection={verificationOutputValues} />
      <div className={`flex flex-col border w-[250px] items-center justify-center px-8 h-[100px] gap-3  rounded-sm ${verificationOutputValues?.finalAnalysis === "Compliance" ? "bg-green-300" : "bg-red-200"}`}>
        <h1 className="font-bold text-md">Final Analysis
        </h1>
        <p className="text-md font-semibold">{verificationOutputValues?.finalAnalysis}</p>
      </div>
      <div className={`flex gap-1 ${verificationOutputValues?.finalAnalysis === "Compliance" ? "bg-green-300" : "bg-red-200"} border  py-2 px-2`}>
        <h3 className="font-medium">Reason: </h3>
        <p>{verificationOutputValues?.reason}
        </p>
      </div>
    </div>
  )
}

export default FirstAidKitOutput
