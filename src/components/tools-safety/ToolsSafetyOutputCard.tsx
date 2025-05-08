const ToolsSafetyOutputCard = ({ toolsDetectionCount, toolsDetectionTitle, totalToolsDetectionTitle, totalToolsDetectionCount, }: any) => {

  return (
    <>
      <div className="flex flex-col xl:flex-row gap-5">
        <div className={`flex flex-col border w-[300px] items-center justify-center px-8 h-[100px] gap-3 rounded-sm ${toolsDetectionCount > 0
          ? "bg-green-200" : "bg-red-100"}`}>
          <h1 className="font-bold text-md">{toolsDetectionTitle
          }
          </h1>
          <p className="text-md font-semibold">{toolsDetectionCount > 0
            === true ? "True" : "False"}</p>
        </div>
        <div className={`flex flex-col border w-[300px]  items-center justify-center px-8 h-[100px] gap-3 ${toolsDetectionCount > 0 ? "bg-yellow-100" : "bg-red-100"} rounded-sm text-center`}>
          <h1 className="font-bold text-md">{totalToolsDetectionTitle
          }
          </h1>
          <p className="text-md font-semibold">{toolsDetectionCount}</p>
        </div>
        <div className={`flex flex-col border w-[300px]  items-center justify-center px-8 h-[100px] gap-3 ${toolsDetectionCount > 0 ? "bg-yellow-100" : "bg-red-100"} rounded-sm`}>
          <h1 className="font-bold text-md">
            Avg Detection Confidence
          </h1>
          <p className="text-md font-semibold">{Math.round(toolsDetectionCount / totalToolsDetectionCount * 100) || 0}%</p>
        </div>
      </div>

    </>
  )
}

export default ToolsSafetyOutputCard
