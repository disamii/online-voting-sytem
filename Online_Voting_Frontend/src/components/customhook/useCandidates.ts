import { useQuery } from "@tanstack/react-query";
import { getCandidate } from "@/service/candidate";
import { Candidate } from "@/types/interfaces";



export default function useCandidates() {
    
    const { data: candidates = [], isLoading, error } = useQuery<Candidate[]>({
        queryKey: ['candidates'],
        queryFn: getCandidate,
    });
    return { isLoading, candidates, error };
}
