import React from 'react'
import { Button } from '../ui/button'

const Singup:React.FC=()=>{
return(
  <div className='flex-1 bg-secondary flex items-center flex-col justify-center text-accent-foreground gap-3'>
    <h1 className=' font-medium text-4xl text-center'>Hello Voter</h1>
    <p>It is time you to vote your leader .</p>
    <Button className='bg-secondary shadow-none border-accent-foreground border-2 px-10'>
      Sign UP
    </Button>
  </div>
)
}
export default Singup