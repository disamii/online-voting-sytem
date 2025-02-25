import { useQuery,useQueryClient } from "@tanstack/react-query";
import { VoterProfileReturn } from "@/types/interfaces";
import { getProfile } from "@/service/userAPI";


export default function useProfile() {
    const queryClient = useQueryClient();

    const { data: user_profile , isLoading, error } = useQuery<VoterProfileReturn[]>({
        queryKey: ['user_profile'],
        queryFn: getProfile,
    });
    const invalidateProfile = () => {
        queryClient.invalidateQueries({ queryKey: ['user_profile'] });
    };
    return { isLoading, user_profile, error ,invalidateProfile};
}
