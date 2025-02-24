import handleResponse from "./handleResponse";
import { apiRequest } from "./APIrequest";
import {LoginValues,SignupUser, VoterProfileReturn} from "@/types/interfaces"
import {User,Token} from "@/types/interfaces"


const LOGIN_URL='http://127.0.0.1:8000/auth/jwt/create/'
const USER_URL='http://127.0.0.1:8000/auth/users/'
const PROFILE_URL='http://127.0.0.1:8000/api/voter_profile/'


export async function signup(data:SignupUser) :Promise<Token> {
    try {
        const response = await fetch(USER_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        return await handleResponse(response)
    }
        catch (error) {
            throw error;
        }
}


export async function login(data:LoginValues):Promise<Token>{
    console.log(data)
    try {
        const response = await fetch(LOGIN_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        return await handleResponse(response)
    }
        catch (error) {
            throw error;
        }
}


export async function getUser() :Promise<User>{
return await apiRequest(USER_URL,'GET');
}

export  async function getProfile() :Promise<VoterProfileReturn>{
    return await apiRequest(PROFILE_URL,'GET')
    
}