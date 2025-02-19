import { Button } from '../ui/button'

type Props = {
    swapper: () => void; 
  };
  
export default function SignupText({swapper}: Props) {
  return (
<div className='h-full bg-secondary flex items-center flex-col justify-center text-accent-foreground gap-3'>
    <h1 className=' font-medium text-4xl text-center'>Hello Voter</h1>
    <p>It is time you to vote your leader .</p>
    <Button className='bg-secondary shadow-none border-accent-foreground border-[0.1rem] px-10' onClick={swapper}>
      Sign UP
    </Button>
  </div>  )
}