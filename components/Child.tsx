import {
  ConnectWallet,
  useAddress,
  useContract,
  useContractRead,
  useContractWrite,
  Web3Button
} from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { contractAddress, maxMintPerTx, maxSupply, mintPrice } from "@/app/_config/blockchain";
import { ABI } from "@/app/_config/abi";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";

const zeroAddress = "0x0000000000000000000000000000000000000000"

export default function Child() {
  const [mintCount, setMintCount] = useState<number>(0)
  const [isSoldOut, setIsSoldOut] = useState<boolean>(false)
  const [canMintAmount, setCanMintAmount] = useState<number>(0)

  const { contract } = useContract(contractAddress, ABI);
  const connectedAddress = useAddress();

  // コントラクトからのRead
  const { data: totalSupply = 0 } = useContractRead(contract, "totalSupply");
  const { data: phase = undefined } = useContractRead(contract, "phase");
  const { data: allowList = 0 } = useContractRead(contract, "allowList", [connectedAddress || zeroAddress]);
  const { data: presaleMinted = 0 } = useContractRead(contract, "presaleMinted", [connectedAddress || zeroAddress]);

  // コントラクトへWrite
  const { mutateAsync: alMint } = useContractWrite(contract, "alMint");
  const { mutateAsync: publicMint } = useContractWrite(contract, "publicMint");

  // セール時のMint可能枚数を設定します
  useEffect(() => {
    if (phase === 1) {
      // ALセールの時、Mint可能枚数を算出します
      if (connectedAddress && allowList && presaleMinted) {
        const al = allowList.toNumber()
        const minted = presaleMinted.toNumber()
        const mintableAmount = al - minted

        setCanMintAmount(mintableAmount)
        setMintCount(mintableAmount)
      }
    } else if (phase === 2) {
      // パブリックセールの時、Mint上限をセットします
      setMintCount(maxMintPerTx)
    }
  }, [connectedAddress, allowList, presaleMinted, phase])

  useEffect(() => {
    if (totalSupply.toString() === maxSupply.toString()) {
      setIsSoldOut(true)
    }
  }, [totalSupply])

  // カウントアップです
  const countUp = () => {
    if (phase === 1) {
      if (mintCount + 1 <= canMintAmount) {
        setMintCount(prevState => prevState + 1)
      }
    } else if (phase === 2) {
      if (mintCount + 1 <= 2) {
        setMintCount(prevState => prevState + 1)
      }
    }
  }

  // カウントダウンです
  const countDown = () => {
    if (mintCount - 1 >= 0) {
      setMintCount(prevState => prevState - 1)
    }
  }

  return (
    <>
      {/* ヘッダー */}
      <header className="fixed py-3 px-3 w-full flex flex-row-reverse z-10">
        <ConnectWallet theme={"dark"}/>
      </header>

      {/* 本体 */}
      <div className="relative isolate overflow-hidden pt-14">
        <div className="mx-auto max-w-2xl py-20 flex flex-col items-center">

          <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-6xl">
            The ANARCHY
          </h1>

          <p className="mt-6 text-base leading-8 text-gray-800">
            PreSale: 11月8日（水）20:00〜<br/>
            PublicSale: 11月10日（金）20:00〜<br/>
          </p>
          <p className="mt-2 text-base leading-8 text-gray-700">
            0.05ETH/枚
          </p>

          <div className="mt-5 font-bold text-2xl">
            <p className="px-5 py-3 ring-1 rounded-xl ring-gray-800">{totalSupply.toString()} / {maxSupply}</p>
          </div>

          {/*Mintのセクション */}
          {isSoldOut ? (
            <h1 className="text-3xl mt-12 font-bold tracking-tight text-black">
              SOLD OUT!!!🎉
            </h1>
          ) : phase !== undefined ? phase === 0 ? (
            <h1 className="text-3xl italic mt-12 font-bold tracking-tight text-gray-500">
              coming soon...
            </h1>
          ) : (
            <div className="mt-10 flex items-center justify-center gap-x-2">
              {/* マイナスボタン */}
              <button
                type="button"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-800 hover:bg-gray-50"
                onClick={countDown}
              >
                -
              </button>

              <div className="ring-1 rounded-md ring-black">
                <Web3Button
                  contractAddress={contractAddress}
                  contractAbi={ABI}
                  isDisabled={isSoldOut || mintCount === 0}
                  theme={"dark"}
                  action={async () => {
                    const value = ethers.utils.parseEther((mintCount * mintPrice).toString())
                    if (phase === 1) {
                      await alMint({
                        args: [mintCount],
                        overrides: { value: value }
                      })
                    } else if (phase === 2) {
                      await publicMint({
                        args: [mintCount],
                        overrides: { value: value }
                      })
                    }
                  }}
                  overrides={{}}
                  onSuccess={() => alert("ミントが完了しました！")}
                  onError={(error) => {
                    console.error(error)
                    alert(`エラーが発生しました\n ${error.message}`,)
                  }}
                >
                  {isSoldOut ? "SOLD OUT!!!🎉" : (
                    <><span className="font-bold mr-1">{phase === 1 ? "AL:" : "Public:"} {mintCount}</span>Mint</>
                  )}
                </Web3Button>
              </div>

              {/* プラスボタン */}
              <button
                type="button"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-800 hover:bg-gray-50"
                onClick={countUp}
              >
                +
              </button>
            </div>
          ) : ""}

        </div>
        <Footer/>
      </div>
    </>
  )
}