"use client"

import { ReactElement } from "react";
import { ThirdwebProvider } from "@thirdweb-dev/react";

import { activeChain } from "@/app/_config/blockchain";
import Child from "@/components/Child";

export default function Home(): ReactElement {


  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_CLIENT_ID}
      activeChain={activeChain}
    >
      <Child/>
    </ThirdwebProvider>
  )
}