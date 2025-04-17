import { Spinner } from "./ui/spinner"

const Loader = () => {
  return (
    <>
      <div className="flex items-center gap-3">
        <Spinner className="text-[#F92609]"><span className="text-[#F92609]">Processing...</span></Spinner>
      </div >
    </>
  )
}

export default Loader
