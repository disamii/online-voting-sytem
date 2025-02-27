import { useQuery, useQueryClient } from "@tanstack/react-query";
import { AdminVoterManagement} from "@/types/interfaces";
import { getVoters } from "@/service/admin";


export default function useVoterManage() {
    const queryClient = useQueryClient();

    const { data: voters= [], isLoading, error, refetch } = useQuery<AdminVoterManagement[]>({
        queryKey: ['voters'],
        queryFn: getVoters,
    });
    const invalidateElection = () => {
        queryClient.invalidateQueries({ queryKey: ['voters'] });
    };
    const removesElection = () => { 
        
        queryClient.removeQueries({ queryKey: ['voters'] });
    }
    return { isLoading, voters, error, invalidateElection, refetch,removesElection };
}
