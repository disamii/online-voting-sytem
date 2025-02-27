import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Stat } from "@/types/interfaces";
import { getStatus } from "@/service/admin";


export default function useStatus() {
    const queryClient = useQueryClient();

    const { data: stats= [], isLoading, error, refetch } = useQuery<Stat[]>({
        queryKey: ['status'],
        queryFn: getStatus,
    });
    const invalidateStatus = () => {
        queryClient.invalidateQueries({ queryKey: ['status'] });
    };
    const removeStatus = () => { 
        
        queryClient.removeQueries({ queryKey: ['status'] });
    }
    return { isLoading, stats, error, invalidateStatus, refetch,removeStatus };
}
