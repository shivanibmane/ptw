
const DerrickOutputCard = ({ derrickOutputValue, title, validationTitle }: any) => {
  return (
    <div className="flex flex-col xl:flex-row gap-3">
      <div className={`flex flex-col border items-center w-[300px] h-[100px] justify-center py-3  px-8  gap-3 ${derrickOutputValue?.count ? "bg-yellow-100" : "bg-red-100"} rounded-sm`}>
        <h1 className="font-bold text-md">{title}
        </h1>
        <p className="text-md font-semibold">{derrickOutputValue?.count}</p>
      </div>
      <div className={`flex flex-col border items-center  w-[300px] h-[100px]  justify-center py-3  px-8 gap-3 ${derrickOutputValue?.valid ? "bg-green-200" : "bg-red-100"} rounded-sm`}>
        <h1 className="font-bold text-md">{validationTitle}
        </h1>
        <p className="text-md font-semibold">{derrickOutputValue?.valid === true ? "True" : "Fasle"}</p>
      </div>
      <div className={`flex flex-col border w-[300px]  items-center justify-center px-8 h-[100px] gap-3 ${derrickOutputValue?.avgDetectionConf ? "bg-yellow-100" : "bg-red-100"} rounded-sm`}>
        <h1 className="font-bold text-md">
          Avg Detection Config
        </h1>
        <p className="text-md font-semibold">{derrickOutputValue?.avgDetectionConf}</p>
      </div>
    </div>
  )
}

export default DerrickOutputCard
