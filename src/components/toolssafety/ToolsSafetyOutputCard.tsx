const ToolsSafetyOutputCard = ({ toolsOutputData }: any) => {

  return (
    <>{toolsOutputData?.detectionData?.map((detection: any) => (<div className="flex flex-col xl:flex-row gap-5" key={detection.detection_id}>
      <div className={`flex flex-col border w-[300px] items-center justify-center px-8 h-[100px] gap-3 rounded-sm ${toolsOutputData?.detection_status
        ? "bg-green-200" : "bg-red-100"}`}>
        <h1 className="font-bold text-md">{detection.
          detection_cls === "non-insulated-tool" ? "Non-Insulated Tools Detection" : "Insulated Tools Detection"
        }
        </h1>
        <p className="text-md font-semibold">{detection?.detection_status
          === true ? "True" : "False"}</p>
      </div>
      <div className={`flex flex-col border w-[300px]  items-center justify-center px-8 h-[100px] gap-3 ${detection?.toolsCount ? "bg-yellow-100" : "bg-red-100"} rounded-sm text-center`}>
        <h1 className="font-bold text-md">{detection.
          detection_cls === "non-insulated-tool" ? "Total Non-Insulated Tools" : "Total Insulated Tools"
        }
        </h1>
        <p className="text-md font-semibold">{detection?.toolsCount}</p>
      </div>
      <div className={`flex flex-col border w-[300px]  items-center justify-center px-8 h-[100px] gap-3 ${detection?.detectionValue ? "bg-yellow-100" : "bg-red-100"} rounded-sm`}>
        <h1 className="font-bold text-md">
          Avg Detection Config
        </h1>
        <p className="text-md font-semibold">{detection?.detection_conf}</p>
      </div>
    </div>))

    }

    </>
  )
}

export default ToolsSafetyOutputCard
