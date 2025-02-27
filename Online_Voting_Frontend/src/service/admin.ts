import { apiRequest } from "./APIrequest"
import { Stat,Election, AdminVoterManagement} from "@/types/interfaces"

const STATUS_URL='http://127.0.0.1:8000/api/candidate/'
const ELECTION_URL='http://127.0.0.1:8000/api/candidate/'
const VOTER_URL='http://127.0.0.1:8000/api/candidate/'


export async function getStatus():Promise<Stat[]> {
    return apiRequest(STATUS_URL,'GET')
}

export async function getElection():Promise<Election[]> {
    return apiRequest(ELECTION_URL,'GET')
}


export async function getVoters():Promise<AdminVoterManagement[]> {
    return apiRequest(VOTER_URL,'GET')
}
