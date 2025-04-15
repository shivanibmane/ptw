const ToolsSafetyOutputCard = ({ toolsOutputData, toolsDetectionCount }: any) => {

  return (
    <>
      <div className="flex flex-col xl:flex-row gap-5" key={toolsOutputData.toolsOutputData_id}>
        <div className={`flex flex-col border w-[300px] items-center justify-center px-8 h-[100px] gap-3 rounded-sm ${toolsOutputData?.toolsOutputData_status
          ? "bg-green-200" : "bg-red-100"}`}>
          <h1 className="font-bold text-md">{toolsOutputData.
            toolsOutputData_cls === "non-insulated-tool" ? "Non-Insulated Tools " : "Insulated Tools "
          }
          </h1>
          <p className="text-md font-semibold">{toolsOutputData?._status
            === true ? "True" : "False"}</p>
        </div>
        <div className={`flex flex-col border w-[300px]  items-center justify-center px-8 h-[100px] gap-3 ${toolsOutputData?.toolsCount ? "bg-yellow-100" : "bg-red-100"} rounded-sm text-center`}>
          <h1 className="font-bold text-md">{toolsOutputData.
            toolsOutputData_cls === "non-insulated-tool" ? "Total Non-Insulated Tools" : "Total Insulated Tools"
          }
          </h1>
          <p className="text-md font-semibold">{toolsDetectionCount}</p>
        </div>
        <div className={`flex flex-col border w-[300px]  items-center justify-center px-8 h-[100px] gap-3 ${toolsOutputData?.toolsOutputDataValue ? "bg-yellow-100" : "bg-red-100"} rounded-sm`}>
          <h1 className="font-bold text-md">
            Avg Detection Config
          </h1>
          <p className="text-md font-semibold">{toolsOutputData?.toolsOutputData_conf}</p>
        </div>
      </div>

    </>
  )
}

export default ToolsSafetyOutputCard
