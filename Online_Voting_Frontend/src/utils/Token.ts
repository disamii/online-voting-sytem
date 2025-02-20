import useAuthStore from "@/store/authStore";

function getRefreshToken(): string | null {
  return useAuthStore.getState().token?.refresh || null;
}

function getAccessToken(): string | null {
  return useAuthStore.getState().token?.access || null;
}

export { getRefreshToken, getAccessToken };
