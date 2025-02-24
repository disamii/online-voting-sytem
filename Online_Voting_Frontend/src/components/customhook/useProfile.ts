import { useQuery } from "@tanstack/react-query";
import { VoterProfileReturn } from "@/types/interfaces";
import { getProfile } from "@/service/userAPI";


export default function useProfile() {
    const { data: user_profile, isLoading, error } = useQuery<VoterProfileReturn>({
        queryKey: ['user_profile'],
        queryFn: getProfile,
    });

    return { isLoading, user_profile, error };
}
