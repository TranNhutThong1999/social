import { cookies, headers } from "next/headers";
import { API_ENDPOINTS } from "../constants/api";

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchWithAuth(input: RequestInfo | URL, init?: RequestInit) {
  const cookieStore = await cookies();
  const cookieHeader = cookieStore.toString();
  const headersList = await headers();
  const host = headersList.get("host"); 
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  const url = `${protocol}://${host}${input}`
  const refreshUrl = `${protocol}://${host}${API_ENDPOINTS.AUTH.REFRESH_TOKEN}`
  let res = await fetch(url, {
    ...init,
    headers: {
      ...init?.headers,
      Cookie: cookieHeader,
    },
    cache: "no-store",
  });

  if (res.status === 401) {
    const refreshRes = await fetch(refreshUrl, {
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

    res = await fetch(url, {
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