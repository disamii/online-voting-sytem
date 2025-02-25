import handleResponse from "./handleResponse";
import { apiRequest } from "./APIrequest";
import { LoginValues, SignupUser, VoterProfileReturn } from "@/types/interfaces"
import { User, Token } from "@/types/interfaces"
import { UserProfile } from "@/types/interfaces";
// import { getAccessToken } from "@/utils/Token";

const LOGIN_URL = 'http://127.0.0.1:8000/auth/jwt/create/'
const USER_URL = 'http://127.0.0.1:8000/auth/users/'
const PROFILE_URL = 'http://127.0.0.1:8000/api/voter_profile/'


export async function signup(data: SignupUser): Promise<Token> {
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


export async function login(data: LoginValues): Promise<Token> {
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


export async function getUser(): Promise<User> {
    return await apiRequest(USER_URL, 'GET');
}

export async function getProfile(): Promise<VoterProfileReturn> {
    return await apiRequest(PROFILE_URL, 'GET')

}
export async function postProfile(data: UserProfile): Promise<VoterProfileReturn> {
    const formData = new FormData();

    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            let value = data[key as keyof UserProfile];
            if (value instanceof Date) {
                value = value.toISOString().split("T")[0];
            }
            if (key === 'photo') {
                if (value && typeof value === 'object' && value instanceof File) {
                    formData.append(key, value);
                }
            } else {
                if (value !== null && value !== undefined) {
                    formData.append(key, value as string | Blob);
                }
            }
        }
    }
  return apiRequest(PROFILE_URL,'POST',formData)
}

