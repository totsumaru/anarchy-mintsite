import {
  ConnectWallet,
  useAddress,
  useContract,
  useContractRead,
  useContractWrite,
  Web3Button
} from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { contractAddress, mintPrice } from "@/app/_config/blockchain";
import { ABI } from "@/app/_config/abi";
import { useEffect, useState } from "react";

const zeroAddress = "0x0000000000000000000000000000000000000000"

export default function Child() {
  const [mintCount, setMintCount] = useState<number>(0)
  const [isSoldOut, setIsSoldOut] = useState<boolean>(false)
  const [mintableQuantity, setMintableQuantity] = useState<number>(0)

  const { contract } = useContract(contractAddress, ABI);
  const address = useAddress();

  // コントラクトからのRead
  const { data: totalSupply = 0 } = useContractRead(contract, "totalSupply");
  const { data: phase = undefined } = useContractRead(contract, "phase");
  const { data: maxMintQuantity = 0 } = useContractRead(contract, "allowList", [address || zeroAddress]);
  const { data: mintedQuantity = 0 } = useContractRead(contract, "presaleMinted", [address || zeroAddress]);

  // コントラクトへWrite
  const { mutateAsync: alMint } = useContractWrite(contract, "alMint");
  const { mutateAsync: publicMint } = useContractWrite(contract, "publicMint");

  useEffect(() => {
    if (phase === 1) {
      if (address && maxMintQuantity && mintedQuantity) {
        const maxMint = maxMintQuantity.toNumber()
        const minted = mintedQuantity.toNumber()
        const mintable = maxMint - minted
        setMintableQuantity(mintable)
        setMintCount(mintable)
      }
    } else if (phase === 2) {
      setMintCount(2)
    }
  }, [address, maxMintQuantity, mintedQuantity, phase])

  const countUp = () => {
    if (phase === 1) {
      if (mintCount + 1 <= mintableQuantity) {
        setMintCount(prevState => prevState + 1)
      }
    } else if (phase === 2) {
      if (mintCount + 1 <= 2) {
        setMintCount(prevState => prevState + 1)
      }
    }
  }

  const countDown = () => {
    if (mintCount - 1 >= 0) {
      setMintCount(prevState => prevState - 1)
    }
  }

  return (
    <>
      <header className="fixed py-3 px-3 w-full flex flex-row-reverse z-10 shadow">
        <ConnectWallet theme={"dark"}/>
      </header>
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

          {/*Mintのセクション */}
          {phase === 0 ? (
            <h1 className="text-3xl italic mt-12 font-bold tracking-tight text-gray-500">
              coming soon...
            </h1>
          ) : (
            <div className="mt-10 flex items-center justify-center gap-x-2">
              {/* マイナスボタン */}
              <button
                type="button"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                onClick={countDown}
              >
                -
              </button>

              <Web3Button
                contractAddress={contractAddress}
                contractAbi={ABI}
                isDisabled={isSoldOut}
                theme={isSoldOut ? "light" : "dark"}
                action={async () => {
                  await publicMint({ args: [mintCount] })
                }}
                overrides={{
                  value: ethers.utils.parseEther((mintCount * mintPrice).toString())
                }}
                onSuccess={(result) => alert("ミントが完了しました！")}
                onError={(error) => {
                  console.error(error)
                  console.log("価格: ", mintCount * mintPrice)
                  alert(`エラーが発生しました: ${error}}`,)
                }}
              >
                {isSoldOut ? "SOLD OUT!!!🎉" : (
                  <><span className="font-bold mr-1">{mintCount}</span>Mint</>
                )}
              </Web3Button>

              {/* プラスボタン */}
              <button
                type="button"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                onClick={countUp}
              >
                +
              </button>
            </div>
          )}

        </div>
      </div>
    </>
  )
}