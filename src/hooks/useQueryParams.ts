"use client";

import { useSearchParams, useRouter } from "next/navigation";


export function useQueryParams() {
  const searchParams = useSearchParams();
  const router = useRouter();


  const getParams = () => {
    const result: Record<string, string | undefined | any> = {};
  
    for (const key of searchParams.keys()) {
      const values = searchParams.getAll(key);
      result[key] = values.length > 1 ? (values ?? undefined) : values[0];
    }
  
    return result;
  };


  const setParams = (values: Record<string, string | number | undefined>, replaceAll?: false) => {
    const params = new URLSearchParams(replaceAll ? '' : searchParams.toString());
    Object.entries(values).forEach(([key, value]) => {
      if (value === null || value === undefined || String(value).trim() === '') {
        params.delete(key);
      } else {
        params.set(key, String(value));
      }
    });
    router.push(`?${params.toString()}`);
  };


  return {
    getParams,
    setParams,
  };
}
