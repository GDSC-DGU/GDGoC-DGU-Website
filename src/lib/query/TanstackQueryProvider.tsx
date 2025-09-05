"use client";

import { ReactNode, useEffect, useState } from "react";

import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import type { Persister } from "@tanstack/react-query-persist-client";

export function TanstackQueryProvider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 30, // 30분 (Presigned URL보다 짧게)
            gcTime: 1000 * 60 * 60, // 1시간
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            refetchInterval: false,
            refetchOnMount: false,
          },
        },
      }),
  );

  const [persister] = useState<Persister>(() =>
    createSyncStoragePersister({
      storage: typeof window !== "undefined" ? window.localStorage : undefined,
      key: "REACT_QUERY_OFFLINE_CACHE",
      serialize: (data) => {
        return JSON.stringify({
          ...data,
          timestamp: Date.now(),
        });
      },
      deserialize: (cachedString) => {
        const parsed = JSON.parse(cachedString);
        const maxAge = 1000 * 60 * 60; // 1시간
        if (Date.now() - parsed.timestamp > maxAge) {
          return undefined; // 만료된 캐시 무효화
        }
        return parsed;
      },
    }),
  );

  // 캐시 정리
  useEffect(() => {
    if (typeof window === "undefined") return;

    const cacheKey = "REACT_QUERY_OFFLINE_CACHE";
    const cacheData = window.localStorage.getItem(cacheKey);

    if (cacheData) {
      try {
        const parsed = JSON.parse(cacheData);
        const cacheTime = parsed?.timestamp || 0;
        const maxAge = 1000 * 60 * 60; // 1시간

        if (Date.now() - cacheTime > maxAge) {
          window.localStorage.removeItem(cacheKey);
          console.log("Cleared expired cache from localStorage");
        }
      } catch (error) {
        console.error("Error parsing cache data:", error);
      }
    }
  }, []);

  // 시간 단위 buster (1시간마다 캐시 무효화)
  const cacheBuster = `v1-${new Date().toISOString().slice(0, 13)}`; // YYYY-MM-DDTHH

  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{
        persister,
        maxAge: 1000 * 60 * 60, // 1시간
        buster: cacheBuster,
      }}
    >
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </PersistQueryClientProvider>
  );
}
