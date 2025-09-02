import { cookies } from "next/headers";
import { API_ENDPOINTS } from "../constants/api";

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchWithAuth(input: RequestInfo | URL, init?: RequestInit) {
  const cookieStore = await cookies();
  const cookieHeader = cookieStore.toString();

  let res = await fetch(input, {
    ...init,
    headers: {
      ...init?.headers,
      Cookie: cookieHeader,
    },
    cache: "no-store",
  });

  if (res.status === 401) {
    const refreshRes = await fetch(`${NEXT_PUBLIC_API_URL}${API_ENDPOINTS.AUTH.REFRESH_TOKEN}`, {
      method: "POST",
      headers: {
        Cookie: cookieHeader,
      },
      cache: "no-store",
    });

    if (!refreshRes.ok) {
      throw new Error("Refresh token failed");
    }

    const setCookieHeaders = refreshRes.headers.getSetCookie();
    const newCookieHeader = setCookieHeaders.join("; ");

    res = await fetch(input, {
      ...init,
      headers: {
        ...init?.headers,
        Cookie: newCookieHeader,
      },
      cache: "no-store",
    });
  }

  return res;
}