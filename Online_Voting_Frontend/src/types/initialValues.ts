import { UserProfile } from "./interfaces";

export const profileInitialValues:UserProfile = {
  first_name: '',
  last_name: '',
  date_of_birth: new Date(),
  gender: '',
  address: '',
  region: '',
  photo: null, 
  };