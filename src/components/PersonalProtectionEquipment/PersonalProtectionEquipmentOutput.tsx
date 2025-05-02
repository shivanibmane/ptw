import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"

const dummyData = [
  { title: "Person", count: 1, isValid: true, reason: null },
  { title: "Safety Vest", count: 1, isValid: true, reason: null },
  { title: "Safety Shoes", count: 0, isValid: false, reason: "Shoes not detected" },
  { title: "Safety Gloves", count: 0, isValid: false, reason: "Gloves not worn" },
  { title: "Safety Halmet", count: 1, isValid: true, reason: null },
  { title: "Body Harness", count: 1, isValid: true, reason: null }
]

const PersonalProtectionEquipmentOutput = () => {
  return (
    <>
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
          {dummyData.map((item) => (
            <TableRow key={item.title} >
              <TableCell >{item.title}</TableCell>
              <TableCell>{item.count}</TableCell>
              <TableCell>{item.isValid === true ? "True" : "False"}</TableCell>
              <TableCell >{item.reason}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table >
      <div className={`flex flex-col border  items-center justify-center sm:w-[300px] xl:w-[250px] bg-green-300  px-8 h-[100px] gap-3 "bg-green-300" } rounded-sm`}>
        <h1 className="font-bold text-md">Final Analysis
        </h1>
        <p className="text-md font-semibold">{"Non-Compliance"}</p>
      </div></>
  )
}

export default PersonalProtectionEquipmentOutput
