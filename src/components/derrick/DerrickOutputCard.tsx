
const DerrickOutputCard = ({ title, validationTitle, isDetected, detectionCount, avgConfig }: any) => {
  return (
    <div className="flex flex-col xl:flex-row gap-3">
      <div className={`flex flex-col border items-center w-[300px] h-[100px] justify-center py-3  px-8  gap-3 ${detectionCount ? "bg-yellow-100" : "bg-red-100"} rounded-sm`}>
        <h1 className="font-bold text-md">{title}
        </h1>
        <p className="text-md font-semibold">{detectionCount}</p>
      </div>
      <div className={`flex flex-col border items-center  w-[300px] h-[100px]  justify-center py-3  px-8 gap-3 ${isDetected ? "bg-green-200" : "bg-red-100"} rounded-sm`}>
        <h1 className="font-bold text-md">{validationTitle}
        </h1>
        <p className="text-md font-semibold">{isDetected === true ? "True" : "Fasle"}</p>
      </div>
      <div className={`flex flex-col border w-[300px]  items-center justify-center px-8 h-[100px] gap-3 ${avgConfig ? "bg-yellow-100" : "bg-red-100"} rounded-sm`}>
        <h1 className="font-bold text-md">
          Avg Detection Confidence
        </h1>
        <p className="text-md font-semibold">{avgConfig}%</p>
      </div>
    </div>
  )
}

export default DerrickOutputCard
