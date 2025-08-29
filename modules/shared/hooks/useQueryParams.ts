"use client";

import { useSearchParams, useRouter } from "next/navigation";


export function useQueryParams() {
  const searchParams = useSearchParams();
  const router = useRouter();


  // ✅ Lấy nhiều value cùng key (?tag=abc&tag=xyz)
  const getAllParam = (key: string, defaultValue: string[] = []) => {
    const values = searchParams.getAll(key);
    return values.length > 0 ? values : defaultValue;
  };

  // ✅ Lấy nhiều key cùng lúc
  // const getParams = (keys: string[]) => {
  //   const result: Record<string, string | undefined | any> = {};
  //   keys.forEach((key) => {
  //     result[key] = decode(searchParams.get(key)) ?? undefined;
  //   });
  //   return result;
  // };

  const getParams = () => {
    const result: Record<string, string | undefined | any> = {};
  
    for (const key of searchParams.keys()) {
      const values = searchParams.getAll(key);
      result[key] = values.length > 1 ? (values ?? undefined) : values[0];
    }
  
    return result;
  };


  // ✅ Set nhiều param
  const setParams = (values: Record<string, string | number | undefined>, replaceAll?: false) => {
    const params = new URLSearchParams(replaceAll ? '' : searchParams.toString());
    Object.entries(values).forEach(([key, value]) => {
      params.set(key, String(value));
    });
    router.push(`?${params.toString()}`);
  };

  // ✅ Append (thêm giá trị mới, không ghi đè)
  // const appendParam = (key: string, value: string) => {
  //   const params = new URLSearchParams(searchParams.toString());
  //   params.append(key, encode(value));
  //   router.push(`?${params.toString()}`);
  // };

  // const removeParam = (key: string) => {
  //   const params = new URLSearchParams(searchParams.toString());
  //   params.delete(key);
  //   router.push(`?${params.toString()}`);
  // };

  // const removeParams = (keys: string[]) => {
  //   const params = new URLSearchParams(searchParams.toString());
  //   keys.forEach((key) => params.delete(key));
  //   router.push(`?${params.toString()}`);
  // };

  return {
    getAllParam,
    getParams,
    setParams,
    all: searchParams,
  };
}
