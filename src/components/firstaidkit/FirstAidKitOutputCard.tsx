
const FirstAidKitOutputCard = ({ firstAidBoxItemsDetection }: any) => {
  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-2  justify-center xl:gap-3 gap-3 mb-3">
        {firstAidBoxItemsDetection?.detectionData?.map((firstAidBoxItemDetection: any) => (<div className="flex flex-col gap-4 xl:flex-row xl:gap-3 " key={firstAidBoxItemDetection.detectionTitle}>
          <div className={`flex flex-col border w-[300px] xl:w-[250px] items-center justify-center px-8 h-[100px] gap-3 rounded-sm ${firstAidBoxItemDetection.detectionValue ? "bg-green-200" : "bg-red-100"}`}>
            <h1 className="font-bold text-md">{firstAidBoxItemDetection.detectionTitle}
            </h1>
            <p className="text-md font-semibold">{firstAidBoxItemDetection.detectionValue ? "True" : "False"}</p>
          </div>
          <div className={`flex flex-col border w-[300px] xl:w-[250px] items-center justify-center px-8 h-[100px] gap-3 ${firstAidBoxItemDetection.detectionValue ? "bg-yellow-100" : "bg-red-100"} rounded-sm`}>
            <h1 className="font-bold text-md">Avg. Detection Confg
            </h1>
            <p className="text-md font-semibold">{firstAidBoxItemDetection.detectionValue}</p>
          </div></div>))}
      </div>
    </>
  )
}

export default FirstAidKitOutputCard
