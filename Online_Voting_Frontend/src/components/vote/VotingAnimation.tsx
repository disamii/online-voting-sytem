import '@/styling/voting.css'
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from '@/components/ui/dialog'

import { Dispatch, SetStateAction, useEffect } from "react";
type Props = {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    photo: string;
  };
  
  export default function VotingAnimation({ open, setOpen, photo }: Props) {
    useEffect(() => {
      if (open) {
        const timer = setTimeout(() => {
          setOpen(false); // Auto-close dialog after 3 seconds
        }, 3000);
  
        return () => clearTimeout(timer);
      }
    }, [open, setOpen]);
  
    return (
      <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className='bg-black'>
                <div className="finished text-center  flex items-center justify-center ">
                    <div className="continer">
                        <div className="box">
                            <article id="cardd">
                                <img src={photo} />
                            </article>
                            <div id="top">top</div>
                            <div id="right"></div>
                            <div id="bottom"></div>
                            <div id="left"></div>
                            <div id="back"></div>
                            <div id="front">
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}