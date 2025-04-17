import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from './AppContext'
import { useLocation, useNavigate } from 'react-router-dom'
import InputFields from './InputFields'

const checkpoints = [
  { path: "/id-card-verification", name: "ID Card Verification" },
  { path: "/first-aid-kit", name: "First AID Kit" },
  { path: "/barricade-site", name: "Barricade Site" },
  { path: "/earthing-check", name: "Earthing Check" },
  { path: "/ne-voltage-check", name: "N-E Voltage Check" },
  { path: "/derrick", name: "Derrick" },
  { path: "/tools-safety", name: "Tools Safety" },
  { path: "/fall-restraint", name: "Fall Restraint" },
  { path: "/roof-edge-protection", name: "Roof-edge Protection" },
];
const CheckPointSelector = () => {
  const { setSelectedVerificationCheckpoint, setIsSelectedVerificationFile, }: any = useContext(AppContext);
  const navigate = useNavigate()
  const location = useLocation();
  const [selectedPath, setSelectedPath] = useState("");

  useEffect(() => {
    setSelectedPath(location.pathname);
    setSelectedVerificationCheckpoint(location.pathname);
  }, [location.pathname]);


  return (
    <div className='px-3 space-y-2'>
      <h2 className='text-[16px] font-semibold'>Select Checkpoint</h2>
      <Select onValueChange={(value) => {
        setSelectedPath(value)
        setSelectedVerificationCheckpoint(value);
        navigate(value)
        setIsSelectedVerificationFile(false)
      }} value={selectedPath}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent >
          <SelectGroup>
            {checkpoints?.map((checkpoint: any) => (<SelectItem className='py-2' key={checkpoint.path} value={checkpoint.path}   >{checkpoint.name}</SelectItem>))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <InputFields />
    </div>
  )
}
export default CheckPointSelector
