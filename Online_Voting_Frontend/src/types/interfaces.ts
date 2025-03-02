import { LucideIcon } from "lucide-react";
export interface Token {
    access: string;
    refresh: string;
  }
  
  export interface User {
    id: string | null;
    email: string | null;
    national_id: string | null;
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



export interface VoterStats {
  registered_user: number;
  already_voted: number;
}
export interface Stat {
  title: string;
  value: number;  // Changed from string to number
  icon?: LucideIcon;  // Made optional since API does not return it
  description: string;
}

export interface AdminVoterManagement {
  user_id: string | null;       // From User
  email: string | null;         // From User
  national_id: string | null;   // From User
  first_name: string;           // From UserProfile
  last_name: string;            // From UserProfile
  date_of_birth: Date;          // From UserProfile
  gender: string;               // From UserProfile
  address: string;              // From UserProfile
  region: string;               // From UserProfile
  photo?: File | null;          // From UserProfile
  id: number;                   // From VoterProfileReturn
  voter: string;                // From VoterProfileReturn
  biometric_data: string | null; // From VoterProfileReturn
  has_voted: boolean;           // From VoterProfileReturn
  registration_date: string;    // From VoterProfileReturn
  updated_at: string;           // From VoterProfileReturn
}



export interface RecentActivity {
  action: string;
  details: string;
  time: string; 
}
