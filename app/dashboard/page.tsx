"use client";

import { useAccount } from 'wagmi'
import { config } from '../../config'
import { getAccount, getWebAuthnValidator, getDeadmanSwitch, getWebauthnValidatorSignature } from "@rhinestone/module-sdk";

import Safe, { PasskeyArgType, AddPasskeyOwnerTxParams } from '@safe-global/protocol-kit'

import { privateKeyToAccount } from "viem/accounts";

import {
  ENTRYPOINT_ADDRESS_V07,
  createSmartAccountClient,
} from "permissionless";
import { signerToSafeSmartAccount } from "permissionless/accounts";
import {
  createPimlicoBundlerClient,
  createPimlicoPaymasterClient,
} from "permissionless/clients/pimlico";
import { erc7579Actions } from "permissionless/actions/erc7579";
import { createPublicClient, getContract, http, parseEther } from "viem";
import { sepolia } from "viem/chains";
import {
  BUNDLER_URL,
  PAYMASTER_URL,
} from '../../lib/constants'

async function upgradeTo7559() {
  const user = "0xC2D6dE5A4dDA3489E481dA084C22464cda9D1Dc4"
  const safe = "0x5e66976567Dcf025c0B8194766D72f5ef712b736"
  const signer = privateKeyToAccount(process.env.NEXT_PUBLIC_PRIVATE_KEY)

  const publicClient = createPublicClient({
    transport: http("https://rpc.ankr.com/eth_sepolia"),
  });

  const pimlicoBundlerClient = createPimlicoBundlerClient({
    transport: http(BUNDLER_URL),
    entryPoint: ENTRYPOINT_ADDRESS_V07,
  });
  
  const safeAccount = await signerToSafeSmartAccount(publicClient, {
    entryPoint: ENTRYPOINT_ADDRESS_V07,
    signer: signer,
    // saltNonce: 0n, // optional
    safeVersion: "1.4.1",
    address: safe, // optional, only if you are using an already created account
  });

  const smartAccountClient = createSmartAccountClient({
    account: safeAccount,
    entryPoint: ENTRYPOINT_ADDRESS_V07,
    chain: sepolia,
    bundlerTransport: http(BUNDLER_URL),
    middleware: {
      gasPrice: async () => {
        return (await pimlicoBundlerClient.getUserOperationGasPrice()).fast;
      },
    },
  }).extend(erc7579Actions({ entryPoint: ENTRYPOINT_ADDRESS_V07 }));
}

function addPasskey() {
  const user = "0xC2D6dE5A4dDA3489E481dA084C22464cda9D1Dc4"
  const safe = "0x5e66976567Dcf025c0B8194766D72f5ef712b736"
  const signer = privateKeyToAccount(process.env.NEXT_PUBLIC_PRIVATE_KEY)

  const protocolKit = await Safe.init({
    "https://rpc.ankr.com/eth_sepolia",
    user,
    safe
  })

  const passkey: PasskeyArgType = {
    rawId,
    coordinates,
  }
  const params: AddPasskeyOwnerTxParams = {
    passkey,
  }

  const safeTransaction = await protocolKit.createAddOwnerTx(params)
  const txResponse = await protocolKit.executeTransaction(safeTransaction)
  await txResponse.transactionResponse?.wait()
}

export default function Dashboard() {
  const { address, isConnecting, isDisconnected } = useAccount({
    config,
  })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          {/* <w3m-button /> */}
          {address}
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        Hola amigo! Kaise ho, theek ho?
        {/* <div>{address}</div> */}
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">

      </div>
    </main>
  );
}
