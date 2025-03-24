const IDVerificationOutput = () => {
  return (
    <div className="flex flex-col justify-between lg:w-[300px] h-[400px] gap-5 p-3">
      <div className="flex flex-col border items-center justify-center py-3  px-8 h-[100px] gap-3 bg-yellow-100 rounded-sm">
        <h1 className="font-bold text-md">Face Matching Distance
        </h1>
        <p className="text-md font-semibold">1.2</p>
      </div>
      <div className="flex flex-col border items-center justify-center px-8 h-[100px] gap-3 bg-red-200 rounded-sm">
        <h1 className="font-bold text-md">Final Analysis
        </h1>
        <p className="text-md font-semibold">Non-Compliance</p>
      </div>
      <div className="flex gap-1 bg-red-200 border  py-2 px-2">
        <h3 className="font-medium">Reason: </h3>
        <p>Both Faces Not Similar.
        </p>
      </div>
    </div>
  )
}

export default IDVerificationOutput
