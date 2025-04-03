

const IDCardVerificationCard = ({ value, title }: any) => {
  return (
    <div className={`flex flex-col border items-center justify-center py-3 sm:w-[300px] xl:w-[200px]  px-8 h-[100px] gap-3 rounded-sm ${value ? " bg-yellow-100" : "bg-red-100"}`}>
      <h1 className="font-bold text-md">{title}
      </h1>
      <p className="text-md font-semibold">{value}</p>
    </div>
  )
}

export default IDCardVerificationCard
