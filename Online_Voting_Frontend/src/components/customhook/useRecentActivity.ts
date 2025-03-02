import { useQuery, useQueryClient } from "@tanstack/react-query";
import { RecentActivity} from "@/types/interfaces";
import { getRecentActivity } from "@/service/admin";


export default function useRecentActivity() {
    const queryClient = useQueryClient();

    const { data: recent= [], isLoading, error, refetch } = useQuery<RecentActivity[]>({
        queryKey: ['recent'],
        queryFn: getRecentActivity,
    });
    const invalidateRecent = () => {
        queryClient.invalidateQueries({ queryKey: ['recent'] });
    };
    const removeRecent = () => { 
        
        queryClient.removeQueries({ queryKey: ['recent'] });
    }
    return { isLoading, recent, error, invalidateRecent, refetch,removeRecent };
}
