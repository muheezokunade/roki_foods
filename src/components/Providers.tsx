"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "sonner";
import { useState } from "react";
import { SanityProvider } from "./SanityProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <SanityProvider>
        {children}
        <Toaster position="top-center" richColors theme="light" />
        <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" />
      </SanityProvider>
    </QueryClientProvider>
  );
}


