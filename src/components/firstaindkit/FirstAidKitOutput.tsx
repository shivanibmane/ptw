import FirstAidKitOutputCard from "./FirstAidKitOutputCard"

const firstAidBoxOutputValues = [
  { title: "Bandage Detection", compliance: true },
  { title: "Avg. Detection Conf.", compliance: 92 },
  { title: "Cotten Detection ", compliance: false },
  { title: "Avg. Detection Conf.", compliance: 78 },
  { title: "Ointment Detection", compliance: true },
  { title: "Avg. Detection Conf.", compliance: 69 },
  { title: "Antiseptic Detection", compliance: false },
  { title: "Avg. Detection Conf.", compliance: 89 },
  { title: "Final Analysis", compliance: "Compliance" },
]

const FirstAidKitOutput = () => {
  return (
    <div className="mb-3 ">
      <FirstAidKitOutputCard firstAidBoxOutputValues={firstAidBoxOutputValues} />
    </div>
  )
}

export default FirstAidKitOutput
