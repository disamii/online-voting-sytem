import { ArrowBigDown, ArrowBigUp } from "lucide-react";
import Vote from "./Vote";
import { useState } from "react"
import { Button } from "../ui/button";
import VotingAnimation from "./VotingAnimation";
// import useAuthStore from "@/store/authStore";

type Props = {};

export default function voteInvitation({ }: Props) {
    // const {user}=useAuthStore()
    const [has_voted,setHasVoted]=useState(false)
    const [open,setOpen]=useState(false)
    const [photo,setPhoto]=useState('')

    return (
        <div className="p-4 flex justify-between gap-2 items-center">
            <div className="text-left pr-40 text-muted">
                <h1>
                    Out  of 100 registered voters, 5 have voted.
                </h1>
                <p className="mb-2">
                    The voting process has been smooth and efficient.
                    Voter participation is essential for a healthy democracy.
                    We encourage all eligible voters to make their voices heard.
                    Your vote matters—let's shape the future together!
                </p>
            </div>
            {has_voted ?
                <div className="flex flex-col mt-4 gap-8 w-full ">
                    <span className="mx-3 ml-1 bg-accent-foreground text-card-foreground py-7 rounded-md w-[32rem] flex justify-evenly items-center ">
                        <ArrowBigDown /><ArrowBigDown />  Thank you for your participation <ArrowBigDown /><ArrowBigDown />
                    </span>
                    <Button className="mx-3 ml-16 bg-orange-300  text-card-foreground py-7 rounded-md w-[32rem]  " disabled> Already Voted</Button>
                    <span className="mx-3 ml-32 bg-accent-foreground text-card-foreground py-7 rounded-md w-[32rem] flex justify-evenly items-center ">
                        <ArrowBigUp /><ArrowBigUp />  Thank you for your participation<ArrowBigUp /><ArrowBigUp />
                    </span>
                </div>:                <div className="flex flex-col mt-4 gap-8 w-full ">
                    <span className="mx-3 ml-1 bg-accent-foreground text-card-foreground py-7 rounded-md w-[32rem] flex justify-evenly items-center ">
                        <ArrowBigDown /><ArrowBigDown />  Place your vote <ArrowBigDown /><ArrowBigDown />
                    </span>
                    <Vote setOpen={setOpen} setPhoto={setPhoto} setHasVoted={setHasVoted}/>
                    <span className="mx-3 ml-32 bg-accent-foreground text-card-foreground py-7 rounded-md w-[32rem] flex justify-evenly items-center ">
                        <ArrowBigUp /><ArrowBigUp />  Place your vote <ArrowBigUp /><ArrowBigUp />
                    </span>
                </div>}
                <VotingAnimation open={open} setOpen={setOpen} photo={photo} />
        </div>
    );
}
