"use client";

import { HeroUIProvider } from "@heroui/react";
import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";

// Only if using TypeScript
declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NonNullable<Parameters<ReturnType<typeof useRouter>["push"]>[1]>;
  }
}

export function HeroProviders({children}: Readonly<PropsWithChildren>) {
  const router = useRouter();

  return <HeroUIProvider navigate={router.push}>{children}</HeroUIProvider>;
}