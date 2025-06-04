import { useContext } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { AppContext } from "../AppContext"
import Loader from "../Loader"
import { equipmentCheckPoints } from "./equipment-checkpoints"
import { Checkbox } from "../ui/checkbox"

const PersonalProtectionEquipmentOutput = () => {
  const { verificationOutputValues, isLoading, equipmentCheckPointsValue }: any = useContext(AppContext)
  const personsDetails = verificationOutputValues?.persons_ppe_details ?? []
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
    <div className="w-full px-4 flex flex-col gap-4">
      <Table className="mx-auto border-1 rounded-lg ">
        <TableHeader>
          <TableRow >
            <TableHead>Person ID</TableHead>
            {equipmentCheckPoints.map(e => (
              <TableHead key={e.id}>{e.type}</TableHead>
            ))}
            <TableHead>Validation</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {personsDetails.length === 0 ? <TableRow>
            <TableCell colSpan={equipmentCheckPoints.length + 2} className="text-center text-gray-500">
              No data found
            </TableCell>
          </TableRow> : personsDetails.map((entry: any, index: number) => {
            const personId = Object.keys(entry)[0]
            const ppeDetails = entry[personId]
            console.log(ppeDetails)
            return (
              <TableRow key={index}>
                <TableCell>{personId}</TableCell>
                {equipmentCheckPoints.map(e => (
                  <TableCell key={e.id} className="">
                    {getEquipmentStatus(ppeDetails, e.key, e.id)}
                  </TableCell>
                ))}
                <TableCell>
                  {equipmentCheckPoints.every(e => !equipmentCheckPointsValue.includes(e.id)) ? (
                    <span className="text-gray-600">N/A</span>
                  ) : (
                    <Checkbox
                      checked
                      disabled={!equipmentCheckPoints
                        .filter(e => equipmentCheckPointsValue.includes(e.id))
                        .every(e => ppeDetails?.[e.key])}
                    />
                  )}
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
export default PersonalProtectionEquipmentOutput
