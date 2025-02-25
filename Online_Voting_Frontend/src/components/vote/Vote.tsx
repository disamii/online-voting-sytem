import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogClose,
    
} from "@/components/ui/dialog"


import useCandidates from "../customhook/useCandidates"
import { Button } from "../ui/button";
import { useState } from "react";
import { vote } from "@/service/candidate";


type VoteProps = {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setPhoto: React.Dispatch<React.SetStateAction<string>>;
    setHasVoted: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Vote({ setOpen, setPhoto, setHasVoted }:VoteProps) {
    const [voted,setVoted]=useState({
        id:'',
        photo:''
    })
    const { candidates} = useCandidates()


    const handleVote =async () => {
        try {
            await vote({candidate_id:voted.id})
            setPhoto(voted.photo); 
            setOpen(true);             
            setHasVoted(true);    
            setVoted({id:'',photo:''})
        } catch (error) {
            console.error('uanble to vote',error)
            
        }
    };



    return (
        <Dialog >
            <DialogTrigger className="mx-3 ml-16 bg-gradient-to-r from-orange-300 to-orange-600  animate-gradient hover:bg-cyan-400 text-card-foreground py-7 rounded-md w-[32rem]  bg-[length:200%_100%] duration-75">
                    VOTE
            </DialogTrigger>
            <DialogContent className="max-w-3xl flex flex-col bg-black">
                <DialogHeader>
                    <DialogTitle className="text-accent">Vote</DialogTitle>
                    <DialogDescription className="text-destructive-foreground text-ellipsis">Vote for Your Favorite Candidate</DialogDescription>
                </DialogHeader>
                <main className="flex flex-wrap justify-evenly">
                    {candidates.map((candidate) => (
                        <div
                            key={candidate.id}
                            className=""
                        >
                            <figure className={`h-28 w-28 p-0 m-0 rounded-[50%] overflow-hidden relative border-sky-400 hover:border-4 ${voted.id==candidate.id?"border-4":''}`} onClick={()=>setVoted({id:candidate.id,photo:candidate.photo})}>
                                <img src={candidate.photo} alt="image" className=' object-fill w-full h-full' />
                            </figure>
                        </div>
                    ))}
                    </main>
                    {voted.id&&
                    <DialogClose asChild className="">
                        <Button variant='destructive' onClick={handleVote}>Vote</Button>
                    </DialogClose>}
            </DialogContent>
        </Dialog>
    )
}