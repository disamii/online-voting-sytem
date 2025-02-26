import { Token } from "@/types/interfaces";


function getRefreshToken(): string | null {
  return localStorage.getItem('refresh_token');
}

function setToken(token:Token):void{
  localStorage.setItem('access_token',token.access)
  localStorage.setItem('refresh_token',token.refresh)
  
}
function getAccessToken(): string | null {
  return localStorage.getItem('access_token');
}


export { getRefreshToken, getAccessToken,setToken };
