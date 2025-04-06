"use client";

import { ReactNode, useState } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export function TanstackQueryProvider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 60 * 24,
            gcTime: 1000 * 60 * 60 * 24 * 7,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            refetchInterval: false,
          },
        },
      }),
  );

  // return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
