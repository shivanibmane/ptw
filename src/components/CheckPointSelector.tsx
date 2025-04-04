import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useContext } from 'react'
import { AppContext } from './AppContext'
import { useNavigate } from 'react-router-dom'
import InputFields from './InputFields'

const CheckPointSelector = () => {
  const { setSelectedVerificationCheckpoint, setIsSelectedVerificationFile }: any = useContext(AppContext);

  const navigate = useNavigate()
  const checkpoints = [
    { path: "/id-card-verification", name: "ID Card Verification" },
    { path: "/first-aid-kit", name: "First AID Kit" },
    { path: "/barricade-site", name: "Barricade Site" },
    { path: "/ne-voltage-check", name: "N-E Voltage Check" },
  ];

  return (
    <div className='px-3 space-y-2'>
      <h2 className='text-[16px] font-semibold'>Select Checkpoint</h2>
      <Select onValueChange={(value) => {
        setSelectedVerificationCheckpoint(value);
        navigate(value)
        setIsSelectedVerificationFile(false)
      }}>
        <SelectTrigger>
          <SelectValue placeholder="ID Card Verification" />
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
