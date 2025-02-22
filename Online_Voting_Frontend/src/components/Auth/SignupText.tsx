import { Button } from '../ui/button'
import { Card } from '../ui/card';

type Props = {
    swapper: () => void; 
  };
  
export default function SignupText({swapper}: Props) {
  return (
<Card className='h-full  flex items-center flex-col justify-center text-card-foreground gap-3'>
    <h1 className=' font-medium text-4xl text-center'>Hello Voter</h1>
    <p>It is time you to vote your leader .</p>
    <Button className=' shadow-none border-[0.1rem] px-10' variant="destructive" onClick={swapper}>
      Sign UP
    </Button>
  </Card>  )
}