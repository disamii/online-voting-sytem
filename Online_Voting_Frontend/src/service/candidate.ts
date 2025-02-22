import { apiRequest } from "./APIrequest"
const CANDIDATE_URL='http://127.0.0.1:8000/api/candidate/'
const VOTE_URL='http://127.0.0.1:8000/api/candidate/vote/'
import { Candidate } from "@/types/interfaces"

export async function getCandidate():Promise<Candidate[]> {
    return apiRequest(CANDIDATE_URL,'GET')
    
}

export async function vote({candidate_id}:{candidate_id:string}) {
    return apiRequest(`${CANDIDATE_URL}vote/`,'POST',{candidate_id})
    
}