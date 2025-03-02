import { apiRequest } from "./APIrequest"
import { Stat, AdminVoterManagement, RecentActivity} from "@/types/interfaces"

const STATUS_URL='http://127.0.0.1:8000/api/stats/status/'
const VOTER_URL='http://127.0.0.1:8000/api/candidate/'
const RECEENT_ACTIVITY_URL='http://127.0.0.1:8000/api/stats/recent_activity/'

export async function getStatus():Promise<Stat[]> {
    return apiRequest(STATUS_URL,'GET')
}


export async function getVoters():Promise<AdminVoterManagement[]> {
    return apiRequest(VOTER_URL,'GET')
}

export async function getRecentActivity():Promise<RecentActivity[]>{
    return apiRequest(RECEENT_ACTIVITY_URL,'GET')
}