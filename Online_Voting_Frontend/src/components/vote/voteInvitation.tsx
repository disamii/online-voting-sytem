import { ArrowBigDown, ArrowBigUp } from "lucide-react";
import Vote from "./Vote";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import VotingAnimation from "./VotingAnimation";
import useProfile from "../customhook/useProfile";
import ProfileDialog from "../Profile/ProfileDialog";
import useAuthStore from "@/store/authStore";
import { Link } from "react-router-dom";
import { VoterProfileReturn } from '@/types/interfaces';

type Props = {};

export default function VoteInvitation({ }: Props) {
    const { isLoading, error, user_profile = [] } = useProfile();
    const profile: VoterProfileReturn | undefined = user_profile[0]; // Type assertion
    const { isAuthenticated } = useAuthStore();
    const [hasVoted, setHasVoted] = useState(profile?.has_voted || false); // Optional chaining
    const [open, setOpen] = useState(false);
    const [photo, setPhoto] = useState('');

    useEffect(() => {
        if (profile) {
            setHasVoted(profile.has_voted);
        }
    }, [profile]); 

    if (isLoading) return <div>Loading your profile...</div>;
    if (error) return <div>Error loading profile.</div>;

    return (
        <div className="p-4 flex justify-between gap-2 items-center">
            <div className="text-left pr-40 text-muted">
                <h1>
                    {profile?.first_name ? `Welcome, ${profile.first_name}` : 'Welcome!'} Out of 100 registered voters, 5 have voted.
                </h1>
                <p className="mb-2">
                    The voting process has been smooth and efficient. Voter participation is essential for a healthy democracy. We encourage all eligible voters to make their voices heard. Your vote matters—let's shape the future together!
                </p>
            </div>

            {isAuthenticated ? (
                profile && Object.keys(profile).length > 0 ? (
                    hasVoted ? (
                        <div className="flex flex-col mt-4 gap-8 w-full">
                            <span className="mx-3 ml-1 bg-accent-foreground text-card-foreground py-7 rounded-md w-[32rem] flex justify-evenly items-center">
                                <ArrowBigDown /><ArrowBigDown /> Thank you for your participation <ArrowBigDown /><ArrowBigDown />
                            </span>
                            <Button className="mx-3 ml-16 bg-orange-300 text-card-foreground py-7 rounded-md w-[32rem]" disabled>
                                Already Voted
                            </Button>
                            <span className="mx-3 ml-32 bg-accent-foreground text-card-foreground py-7 rounded-md w-[32rem] flex justify-evenly items-center">
                                <ArrowBigUp /><ArrowBigUp /> Thank you for your participation <ArrowBigUp /><ArrowBigUp />
                            </span>
                        </div>
                    ) : (
                        <div className="flex flex-col mt-4 gap-8 w-full">
                            <span className="mx-3 ml-1 bg-accent-foreground text-card-foreground py-7 rounded-md w-[32rem] flex justify-evenly items-center">
                                <ArrowBigDown /><ArrowBigDown /> Place your vote <ArrowBigDown /><ArrowBigDown />
                            </span>
                            <Vote setOpen={setOpen} setPhoto={setPhoto} setHasVoted={setHasVoted} />
                            <span className="mx-3 ml-32 bg-accent-foreground text-card-foreground py-7 rounded-md w-[32rem] flex justify-evenly items-center">
                                <ArrowBigUp /><ArrowBigUp /> Place your vote <ArrowBigUp /><ArrowBigUp />
                            </span>
                        </div>
                    )
                ) : (
                    <div className="flex flex-col mt-4 gap-8 w-full">
                        <span className="mx-3 ml-1 bg-accent-foreground text-card-foreground py-7 rounded-md w-[32rem] flex justify-evenly items-center">
                            <ArrowBigDown /><ArrowBigDown /> Please Fill your Profile Form <ArrowBigDown /><ArrowBigDown />
                        </span>
                        <ProfileDialog />
                        <span className="mx-3 ml-32 bg-accent-foreground text-card-foreground py-7 rounded-md w-[32rem] flex justify-evenly items-center">
                            <ArrowBigUp /><ArrowBigUp /> Place your vote <ArrowBigUp /><ArrowBigUp />
                        </span>
                    </div>
                )
            ) : (
                <div className="flex flex-col mt-4 gap-8 w-full">
                    <span className="mx-3 ml-1 bg-accent-foreground text-card-foreground py-7 rounded-md w-[32rem] flex justify-evenly items-center">
                        <ArrowBigDown /><ArrowBigDown /> Login Or Sign Up <ArrowBigDown /><ArrowBigDown />
                    </span>
                    <Link to={'/auth'}>
                        <Button className="mx-3 ml-16 bg-gradient-to-r from-orange-300 to-orange-600 animate-gradient hover:bg-cyan-400 text-card-foreground py-7 rounded-md w-[32rem] bg-[length:200%_100%] duration-75">
                            Login Or Sign Up
                        </Button>
                    </Link>
                    <span className="mx-3 ml-32 bg-accent-foreground text-card-foreground py-7 rounded-md w-[32rem] flex justify-evenly items-center">
                        <ArrowBigUp /><ArrowBigUp /> Login Or Sign Up <ArrowBigUp /><ArrowBigUp />
                    </span>
                </div>
            )}

            <VotingAnimation open={open} setOpen={setOpen} photo={photo} />
        </div>
    );
}
