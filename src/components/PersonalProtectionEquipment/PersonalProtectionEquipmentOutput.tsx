import { useContext } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { AppContext } from "../AppContext"
import Loader from "../Loader"
import { equipmentCheckPoints } from "./equipment-checkpoints"
import { Checkbox } from "../ui/checkbox"

const PersonalProtectionEquipmentOutput = () => {
  const { verificationOutputValues, isLoading, equipmentCheckPointsValue }: any = useContext(AppContext)
  const personsDetails = verificationOutputValues?.persons_ppe_details ?? []
  const { final_analysis_message,
    is_overall_compliant, total_persons_detected
  } = verificationOutputValues?.summary || {}

  const getEquipmentStatus = (details: any, key: string, id: string) => {
    if (!equipmentCheckPointsValue.includes(id)) {
      return <span className="text-gray-600">N/A</span>
    }
    return details?.[key]
      ? <span className="text-green-600">True</span>
      : <span className="text-red-600">False</span>
  }

  if (isLoading) {
    return <div className="flex justify-center items-center"><Loader /></div>
  }

  return (
    <div className="w-full px-4 flex flex-col gap-4 items-center">
      <Table className="mx-auto border border-[#F92609] rounded-lg">
        <TableHeader >
          <TableRow className="border border-[#F92609]">
            <TableHead className="border border-[#F92609] text-center text-[#F92609] row-span-1">Detection No.</TableHead>
            {equipmentCheckPoints.map(e => (
              <TableHead key={e.id} className="border border-[#F92609] text-center text-[#F92609]">{e.type}</TableHead>
            ))}
            <TableHead className="border border-[#F92609] text-center text-[#F92609]">Validation</TableHead>
            <TableHead className="border border-[#F92609] text-center text-[#F92609]">Reason</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {personsDetails.length === 0 ? (
            <TableRow className="border border-[#F92609]">
              <TableCell colSpan={equipmentCheckPoints.length + 2} className="text-center text-gray-500 border border-[#F92609]">
                No data found
              </TableCell>
            </TableRow>
          ) : (
            personsDetails.map((entry: any, index: number) => {
              const personId = Object.keys(entry)[0]
              const ppeDetails = entry[personId]
              return (
                <TableRow key={index} className="border border-[#F92609]">
                  <TableCell className="border border-[#F92609] text-center">{index + 1}</TableCell>
                  {equipmentCheckPoints.map(e => (
                    <TableCell key={e.id} className="border border-[#F92609] text-center">
                      {getEquipmentStatus(ppeDetails, e.key, e.id)}
                    </TableCell>
                  ))}
                  <TableCell className="border border-[#F92609] text-center">
                    {equipmentCheckPoints.every(e => !equipmentCheckPointsValue.includes(e.id)) ? (
                      <span className="text-gray-600">N/A</span>
                    ) : (
                      <Checkbox
                        checked
                        disabled={ppeDetails?.validity === false}
                      />
                    )}
                  </TableCell>
                  <TableCell className="border border-[#F92609] text-center">{equipmentCheckPoints.every(e => !equipmentCheckPointsValue.includes(e.id)) ? (
                    <span className="text-gray-600">N/A</span>
                  ) : ppeDetails?.reason}</TableCell>
                </TableRow>
              )
            })
          )}
        </TableBody>
      </Table>
      <div className="flex flex-col xl:flex-row gap-5 justify-center mt-9 xl:mt-9 " >
        <div className={`flex flex-col border items-center  w-[300px] h-[100px]  justify-center py-3  px-8 gap-3 ${total_persons_detected
          > 0 ? "bg-yellow-100" : "bg-red-200"} rounded-sm`}>
          <h1 className="font-bold text-md">Total Person Detection
          </h1>
          <p className="text-md font-semibold">{total_persons_detected}</p>
        </div>
        <div className={`flex flex-col border items-center w-[300px] h-[100px] justify-center py-3  px-8  gap-3 ${is_overall_compliant === true ? "bg-green-200" : "bg-red-100"} rounded-sm`}>
          <h1 className="font-bold text-md">Final Complainces
          </h1>
          <p className="text-md font-semibold">{is_overall_compliant === true ? "True" : "False"}</p>
        </div>
      </div>
      <div className={`flex gap-1 ${is_overall_compliant === true ? "bg-green-300" : "bg-red-200"} border w-9/12 xl:w-full  py-2 px-2 my-2`}>
        <h3 className="font-medium">Reason:</h3>
        <p>{final_analysis_message}
        </p>
      </div>
    </div>
  )
}

export default PersonalProtectionEquipmentOutput
