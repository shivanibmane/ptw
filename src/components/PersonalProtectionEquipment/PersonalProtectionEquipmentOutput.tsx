import { useContext } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { AppContext } from "../AppContext"
import Loader from "../Loader"
import { Checkbox } from "../ui/checkbox"

const PersonalProtectionEquipmentOutput = () => {
  const { verificationOutputValues, isLoading }: any = useContext(AppContext)
  const data = verificationOutputValues?.equipmentStatus
  if (isLoading) {
    return <div className="flex  justify-center items-center" ><Loader /></div>
  }
  return (!isLoading && <>
    <Table className="w-11/12 mx-auto border-1 rounded-lg mt-10">
      <TableHeader>
        <TableRow className=" text-center">
          <TableHead >Type</TableHead>
          <TableHead>Coutn</TableHead>
          <TableHead>Validation</TableHead>
          <TableHead >Reason</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-left">
        {data?.map((item: any) => (
          <TableRow key={item.title} >
            <TableCell >{item.title}</TableCell>
            <TableCell>{item.count}</TableCell>
            <TableCell>{item.isValid === true ? <Checkbox defaultChecked={true} disabled={true} /> : <Checkbox defaultChecked={false} disabled={true} />}</TableCell>
            <TableCell >{item.reason}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table >
    <div className={`flex flex-col border  items-center justify-center sm:w-[300px] xl:w-[250px]  px-8 h-[100px] gap-3 ${verificationOutputValues.final_compliance === "Complinace" ? "bg-green-300" : "bg-red-200"} rounded-sm`}>
      <h1 className="font-bold text-md">Final Analysis
      </h1>
      <p className="text-md font-semibold">{verificationOutputValues.final_compliance}
      </p>
    </div></>
  )
}

export default PersonalProtectionEquipmentOutput
