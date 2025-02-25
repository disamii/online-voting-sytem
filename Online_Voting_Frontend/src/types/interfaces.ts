
export interface Token {
    access: string;
    refresh: string;
  }
  
  export interface User {
    id: string | null;
    email: string | null;
    national_id: string | null;
}




export interface SignupUser {
    email: string;
    national_id: string;
    password: string;
    confirm_password: string;
}


export interface LoginValues {
    national_id: string;
    password: string;
}
export interface ErrorResponse {
    status?: number;
    error?: string;
    message?: string;
    details?: Record<string, string[]>;
  }

  export interface Candidate {
    id: string;
    first_name: string;
    last_name: string;
    party: string;
    photo: string;
    region: string;
    bio: string;
    education_history: string;
    best_speech_quotes: string;
    votes: number;
    created_at: string; 
}


export interface UserProfile {
  first_name: string;
  last_name: string;
  date_of_birth: Date;
  gender: string;
  address: string;
  region: string;
  photo?: File|null; 
}


export interface VoterProfileReturn extends UserProfile {
  id: number;
  voter: string; 
  biometric_data: string | null; 
  has_voted: boolean;
  registration_date: string; 
  updated_at: string; 
}
