"use client"

import { ReactElement } from "react";
import { ConnectWallet, metamaskWallet, ThirdwebProvider } from "@thirdweb-dev/react";

import { activeChain } from "@/app/_config/blockchain";

export default function Home(): ReactElement {
  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_CLIENT_ID}
      activeChain={activeChain}
      supportedWallets={[
        metamaskWallet()
      ]}
    >
      {/* この中に書く */}
      <div className="text-blue-600">
        <ConnectWallet/>
      </div>
    </ThirdwebProvider>
  )
}