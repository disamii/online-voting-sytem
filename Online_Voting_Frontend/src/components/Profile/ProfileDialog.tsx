import ProfileForm from './ProfileForm'

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
} from "@/components/ui/dialog"

export default function ProfileDialog() {
  return (
    <Dialog>
      <DialogTrigger>
        <button className="mx-3 ml-16 bg-gradient-to-r from-orange-300 to-orange-600  animate-gradient hover:bg-cyan-400 text-card-foreground py-7 rounded-md w-[32rem]  bg-[length:200%_100%] duration-75">
          Fill Profile Form
        </button>
      </DialogTrigger>
      <DialogContent className='bg-card rounded-lg w-[54rem]  text-center'>
        <DialogHeader>
          Profile form
        </DialogHeader>
        <ProfileForm />
      </DialogContent>
    </Dialog>
  )
}