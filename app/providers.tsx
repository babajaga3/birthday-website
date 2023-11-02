"use client";

import { ChakraBaseProvider } from "@chakra-ui/react";
import { IconoirProvider } from "iconoir-react";
import { BirthdayContextProvider } from "./contexts";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraBaseProvider>
      <IconoirProvider>
        <BirthdayContextProvider>
          {children}
        </BirthdayContextProvider>
      </IconoirProvider>
    </ChakraBaseProvider>
  );
}
