import { postProfile } from '@/service/userAPI';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserProfile } from '@/types/interfaces';
import { VoterProfileReturn } from '@/types/interfaces'

export default function usePostProfile(){

const queryClient = useQueryClient();
const mutation = useMutation<VoterProfileReturn, Error, UserProfile>({
    mutationFn: postProfile,
    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['user_profile'] });
    },
});

return{
    createProfile:mutation.mutateAsync
}
}