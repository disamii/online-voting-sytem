import { Candidate } from '@/types/interfaces'
import { Card } from '../ui/card'

type Props = {
    candidate:Candidate
}


export default function CandidateSingleProfile({candidate}: Props) {
  return (
    <Card className='flex flex-col  px-7 py-4 rounded-lg gap-3'>
<div className='flex items-center gap-6'>
<figure className='h-28 w-28 p-0 m-0 rounded-[50%] overflow-hidden'>
<img src={candidate.photo} alt="image" className=' object-fill w-full h-full'/>
</figure>
<strong>{candidate.first_name} {candidate.last_name}</strong>
</div>
<div className='text-left'>
    <div><strong>Party</strong>: {candidate.party}</div>
    <div> <strong>Education history:</strong>{candidate.education_history}</div>
    <div><strong>Background:</strong>{candidate.bio}</div>
</div>

    </Card>
  )
}