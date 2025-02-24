
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
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  gender: string;
  address: string;
  region: string;
  photo: string; // Photo as a string
}


export interface VoterProfileReturn {
  id: number;
  voter: string; // UUID
  first_name: string;
  last_name: string;
  date_of_birth: string; // Consider using Date type if handling date objects
  gender: string;
  address: string;
  region: string;
  photo: string | null; // Assuming photo can be a string or null
  biometric_data: string | null; // Assuming biometric_data can be a string or null
  has_voted: boolean;
  registration_date: string; // Consider using Date type if handling date objects
  updated_at: string; // Consider using Date type if handling date objects
}
