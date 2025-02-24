import { ArrowBigDown, ArrowBigUp } from "lucide-react";
import Vote from "./Vote";
import { useState } from "react"
import { Button } from "../ui/button";
import VotingAnimation from "./VotingAnimation";
import useProfile from "../customhook/useProfile";
import ProfileDialog from "../Profile/ProfileDialog";
import useAuthStore from "@/store/authStore";
import { Link } from "react-router-dom";
type Props = {};

export default function voteInvitation({ }: Props) {
    const { user_profile } = useProfile()
    const { isAuthenticated } = useAuthStore()
    const [has_voted, setHasVoted] = useState(false)
    const [open, setOpen] = useState(false)
    const [photo, setPhoto] = useState('')
    console.log(user_profile)
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

            {isAuthenticated ? <> {user_profile? <>{(user_profile?.has_voted && has_voted) ?
                <div className="flex flex-col mt-4 gap-8 w-full ">
                    <span className="mx-3 ml-1 bg-accent-foreground text-card-foreground py-7 rounded-md w-[32rem] flex justify-evenly items-center ">
                        <ArrowBigDown /><ArrowBigDown />  Thank you for your participation <ArrowBigDown /><ArrowBigDown />
                    </span>
                    <Button className="mx-3 ml-16 bg-orange-300  text-card-foreground py-7 rounded-md w-[32rem]  " disabled> Already Voted</Button>
                    <span className="mx-3 ml-32 bg-accent-foreground text-card-foreground py-7 rounded-md w-[32rem] flex justify-evenly items-center ">
                        <ArrowBigUp /><ArrowBigUp />  Thank you for your participation<ArrowBigUp /><ArrowBigUp />
                    </span>
                </div> : <div className="flex flex-col mt-4 gap-8 w-full ">
                    <span className="mx-3 ml-1 bg-accent-foreground text-card-foreground py-7 rounded-md w-[32rem] flex justify-evenly items-center ">
                        <ArrowBigDown /><ArrowBigDown />  Place your vote <ArrowBigDown /><ArrowBigDown />
                    </span>
                    <Vote setOpen={setOpen} setPhoto={setPhoto} setHasVoted={setHasVoted} />
                    <span className="mx-3 ml-32 bg-accent-foreground text-card-foreground py-7 rounded-md w-[32rem] flex justify-evenly items-center ">
                        <ArrowBigUp /><ArrowBigUp />  Place your vote <ArrowBigUp /><ArrowBigUp />
                    </span>
                </div>}</> :
                <div className="flex flex-col mt-4 gap-8 w-full ">
                    <span className="mx-3 ml-1 bg-accent-foreground text-card-foreground py-7 rounded-md w-[32rem] flex justify-evenly items-center ">
                        <ArrowBigDown /><ArrowBigDown />  Please Fill you Profile Form<ArrowBigDown /><ArrowBigDown />
                    </span>
                    <ProfileDialog />
                    <span className="mx-3 ml-32 bg-accent-foreground text-card-foreground py-7 rounded-md w-[32rem] flex justify-evenly items-center ">
                        <ArrowBigUp /><ArrowBigUp />  Place your vote <ArrowBigUp /><ArrowBigUp />
                    </span>
                    <VotingAnimation open={open} setOpen={setOpen} photo={photo} />
                </div>}
            </> :
                <div className="flex flex-col mt-4 gap-8 w-full ">
                    <span className="mx-3 ml-1 bg-accent-foreground text-card-foreground py-7 rounded-md w-[32rem] flex justify-evenly items-center ">
                        <ArrowBigDown /><ArrowBigDown /> Login Or Sign Up <ArrowBigDown /><ArrowBigDown />
                    </span>
                    <Link to={'/auth'} > 
                    <Button className="mx-3 ml-16 bg-gradient-to-r from-orange-300 to-orange-600  animate-gradient hover:bg-cyan-400 text-card-foreground py-7 rounded-md w-[32rem]  bg-[length:200%_100%] duration-75"> Login Or Sign Up</Button></Link>
                    <span className="mx-3 ml-32 bg-accent-foreground text-card-foreground py-7 rounded-md w-[32rem] flex justify-evenly items-center ">
                        <ArrowBigUp /><ArrowBigUp /> Login Or Sign Up <ArrowBigUp /><ArrowBigUp />
                    </span>
                </div>}
        </div>
    );  
}
