import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Election} from "@/types/interfaces";
import { getElection } from "@/service/admin";


export default function useElection() {
    const queryClient = useQueryClient();

    const { data: elections= [], isLoading, error, refetch } = useQuery<Election[]>({
        queryKey: ['elections'],
        queryFn: getElection,
    });
    const invalidateElection = () => {
        queryClient.invalidateQueries({ queryKey: ['elections'] });
    };
    const removesElection = () => { 
        
        queryClient.removeQueries({ queryKey: ['elections'] });
    }
    return { isLoading, elections, error, invalidateElection, refetch,removesElection };
}
