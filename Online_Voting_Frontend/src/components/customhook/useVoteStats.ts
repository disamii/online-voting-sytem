import { useQuery } from "@tanstack/react-query";
import {VoterStats} from '@/types/interfaces'
import { votedVsRegistered } from "@/service/candidate";


export default function useVoteStats() {
    const { data: status, isLoading, error } = useQuery<VoterStats>({
        queryKey: ['vote_status'],
        queryFn: votedVsRegistered,
    });

    return { isLoading, status, error };
}
