import { useContract, useContractRead, useContractWrite, Web3Button } from "@thirdweb-dev/react";

import { contractAddress } from "@/app/_config/blockchain";
import { ABI } from "@/app/_config/abi";
import { useState } from "react";

export default function Child() {
  const { contract } = useContract(contractAddress, ABI);
  const { data: totalSupply = 0, error: totalSupplyErr } = useContractRead(contract, "totalSupply");
  const { mutateAsync: mintAsync } = useContractWrite(contract, "alMint");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mintCount, setMintCount] = useState<number>(0)
  const [isSoldOut, setIsSoldOut] = useState<boolean>(false)

  return (
    <div className="relative isolate overflow-hidden pt-14 min-h-screen">
      <div className="mx-auto max-w-2xl py-20 flex flex-col items-center">

        <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-6xl">
          The ANARCHY
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-500">
          The ANARCHYの説明が入ります。
        </p>

        <div className="mt-5 font-bold text-2xl">
          <p className="px-5 py-3 ring-1 rounded-xl ring-gray-300">{totalSupply.toString()} / 1550</p>
        </div>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Web3Button
            contractAddress={contractAddress}
            contractAbi={ABI}
            isDisabled={isSoldOut}
            theme={isSoldOut ? "light" : "dark"}
            action={async () => {
              await mintAsync({ args: [mintCount] })
            }}
            onSuccess={(result) => alert("ミントが完了しました！")}
            onError={(error) => {
              console.error(error)
              alert("エラーが発生しました")
            }}
          >
            {isSoldOut ? "SOLD OUT!!!🎉" : "Mint"}
          </Web3Button>
        </div>

      </div>
    </div>
  )
}