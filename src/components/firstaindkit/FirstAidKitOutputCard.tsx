
const FirstAidKitOutputCard = ({ firstAidBoxOutputValues }: any) => {

  return (
    <>
      <div className="grid grid-cols-4 gap-4 mb-3">
        {firstAidBoxOutputValues.map((value: any) => (
          <div className="flex flex-col border w-[250px] items-center justify-center px-8 h-[100px] gap-3 bg-red-200 rounded-sm" key={value.title}>
            <h1 className="font-bold text-md">{value.title}
            </h1>
            <p className="text-md font-semibold">{value.compliance}</p>
          </div>
        ))}
      </div><div className="flex gap-1 bg-red-200 border  py-2 px-2">
        <h3 className="font-medium">Reason: </h3>
        <p>Both Faces Not Similar.
        </p>
      </div></>
  )
}

export default FirstAidKitOutputCard
