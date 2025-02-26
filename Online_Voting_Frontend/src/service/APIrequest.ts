import { getAccessToken } from "@/utils/Token";
import handleResponse from "./handleResponse";

interface ApiRequestConfig {
  url: string;
  config: RequestInit;
}

export async function apiRequest<T>(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  body: Record<string, any> | FormData | null = null,
  contentType: string = "application/json"
): Promise<T> {
  const headers: Record<string, string> = {};
  let finalBody: BodyInit | null = null;

  if (body && method !== "GET" && method !== "DELETE") {
    if (body instanceof FormData) {
      finalBody = body; 
    } else {
      finalBody = JSON.stringify(body);
      headers["Content-Type"] = contentType;
    }
  }
  const accessToken = getAccessToken();
  if (accessToken) {
    headers["Authorization"] = `Bearer ${accessToken}`;
  }

  const originalRequest: ApiRequestConfig = {
    url,
    config: {
      method,
      headers,
      body: finalBody,
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
