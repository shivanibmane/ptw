import FirstAidKitOutputCard from "./FirstAidKitOutputCard"


const firstAidBoxOutputValues = [
  { title: "Bandage Detection", value: "True" },
  { title: "Avg. Detection Conf.", value: 92 },
  { title: "Cotten Detection ", value: "True" },
  { title: "Avg. Detection Conf.", value: 78 },
  { title: "Ointment Detection", value: "True" },
  { title: "Avg. Detection Conf.", value: 69 },
  { title: "Antiseptic Detection", value: "True" },
  { title: "Avg. Detection Conf.", value: 89 },
  { title: "Final Analysis", value: "Compliance" },
]
const FirstAidKitOutput = () => {

  return (
    <div className="mb-3 ">
      <FirstAidKitOutputCard firstAidBoxOutputValues={firstAidBoxOutputValues} />
    </div>
  )
}

export default FirstAidKitOutput
