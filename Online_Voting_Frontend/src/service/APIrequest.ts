import { getAccessToken } from "@/utils/Token";
import handleResponse from "./handleResponse";

interface ApiRequestConfig {
  url: string;
  config: RequestInit;
}

export async function apiRequest<T>(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  body: Record<string, any> | null = null
): Promise<T> {

  const accessToken = getAccessToken();
  const originalRequest: ApiRequestConfig = {
    url,
    config: {
      method,
      headers: {
        Authorization: accessToken ? `Bearer ${accessToken}` : "",
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : null,
    },
  };

  try {
    const response = await fetch(originalRequest.url, originalRequest.config);
    return await handleResponse<T>(response, originalRequest);
  } catch (error) {
    console.error("API Request Error:", (error as Error).message);
    throw error;
  }
}
