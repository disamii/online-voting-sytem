import { getRefreshToken } from "@/utils/Token";
import { ErrorResponse } from "@/types/interfaces";

export default async function handleResponse<T>(
  resp: Response,
  originalRequest?: { url: string; config: RequestInit }
): Promise<T> {

  if (!resp.ok) {

    let errorResp: ErrorResponse | null = null;

    try {
      errorResp = await resp.json();
      console.log(errorResp)

    } catch {
      throw new Error("Error parsing response data.");
    }
    if (resp.status === 401 && errorResp?.error === "INVALID_TOKEN") {
      if (!originalRequest) {
        throw new Error("Session expired. Please log in again.");
      }
      const newAccessToken = getRefreshToken();
      if (newAccessToken) {
        console.info("Trying refresh token...");
        const retryResponse = await fetch(originalRequest.url, {
          ...originalRequest.config,
          headers: {
            ...originalRequest.config.headers,
            Authorization: `Bearer ${newAccessToken}`,
          },
        });
        return handleResponse<T>(retryResponse, originalRequest);
      }

      
      if (window.location.pathname !== "/auth") {
        window.location.href = "/auth";
      }
      throw new Error("Session expired. Please log in again.");
    }

    if (resp.status === 400 && errorResp?.details) {
      const validationMessages = Object.entries(errorResp.details)
        .map(([field, messages]) => `${field}: ${messages.join(", ")}`)
        .join("\n");
      throw validationMessages;
    }
    throw new Error(errorResp?.message || "Unexpected error occurred.");
  }
  

  


  if (resp.status === 204) {
    return {} as T;
  }

  try {
    return (await resp.json()) as T;
  } catch (error) {
    console.error("Unexpected error while parsing JSON:", error);
    throw new Error("Failed to parse response data.");
  }
}
