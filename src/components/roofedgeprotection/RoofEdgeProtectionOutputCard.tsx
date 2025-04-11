
const RoofEdgeProtectionOutputCard = ({ roofEdgeDecteionData, title }: any) => {
  return (
    <>
      <div className={`flex flex-col border text-center items-center  w-[300px] xl:w-[250px] h-[100px]  justify-center py-3  px-8 gap-3 ${roofEdgeDecteionData?.isTrue === true ? "bg-green-200" : "bg-red-100"} rounded-sm`}>
        <h1 className="font-bold text-md">{title}
        </h1>
        <p className="text-md font-semibold">{roofEdgeDecteionData?.isTrue ? "True" : "False"}</p>
      </div>
      <div className={`flex flex-col border items-center w-[300px] xl:w-[250px] h-[100px] justify-center py-3  px-8  gap-3 ${roofEdgeDecteionData?.value > 0 ? "bg-yellow-100" : "bg-red-100"} rounded-sm`}>
        <h1 className="font-bold text-md">Avg Detection Confg
        </h1>
        <p className="text-md font-semibold">{roofEdgeDecteionData?.value}</p>
      </div>

    </>
  )
}

export default RoofEdgeProtectionOutputCard
