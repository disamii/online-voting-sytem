import { apiRequest } from "./APIrequest"
import { Candidate } from "@/types/interfaces"
import { VoterStats } from "@/types/interfaces"

const CANDIDATE_URL='http://127.0.0.1:8000/api/candidate/'
const VOTED_VS_REGISTERED='http://127.0.0.1:8000/api/voted-vs-registered/'


export async function getCandidate():Promise<Candidate[]> {
    return apiRequest(CANDIDATE_URL,'GET')
}

export async function votedVsRegistered():Promise<VoterStats> {
    return apiRequest(VOTED_VS_REGISTERED,'GET')
}

export async function vote({candidate_id}:{candidate_id:string}) {
    return apiRequest(`${CANDIDATE_URL}vote/`,'POST',{candidate_id})
    
}