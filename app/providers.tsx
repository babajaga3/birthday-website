'use client';

import { ChakraBaseProvider } from "@chakra-ui/react";
import { IconoirProvider } from "iconoir-react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraBaseProvider>
      <IconoirProvider>
        {children}
      </IconoirProvider>
    </ChakraBaseProvider>
  );
}