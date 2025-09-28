"use client";

import { createContext, useContext, ReactNode } from 'react';
import { client } from '@/lib/sanity';

interface SanityContextType {
  client: typeof client;
}

const SanityContext = createContext<SanityContextType | undefined>(undefined);

export function SanityProvider({ children }: { children: ReactNode }) {
  return (
    <SanityContext.Provider value={{ client }}>
      {children}
    </SanityContext.Provider>
  );
}

export function useSanity() {
  const context = useContext(SanityContext);
  if (context === undefined) {
    throw new Error('useSanity must be used within a SanityProvider');
  }
  return context;
}



