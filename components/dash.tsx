/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/A1yYIkYMxjl
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
"use client"

import { useState } from "react"
import Link from "next/link"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function Dash() {
  const [deadmanSwitch, setDeadmanSwitch] = useState(false)
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <WalletIcon className="h-6 w-6" />
            <span className="font-bold">Web3 Wallet</span>
          </Link>
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <img
                    src="/placeholder.svg"
                    alt="User Avatar"
                    width={32}
                    height={32}
                    className="rounded-full"
                    style={{ aspectRatio: "32/32", objectFit: "cover" }}
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <main className="flex-1 container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Account Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Wallet Address</span>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">0x123...abc</span>
                    <Button variant="outline" size="icon">
                      <CopyIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Balance</span>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">3.14 ETH</span>
                    <Button variant="outline" size="icon">
                      <RefreshCwIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Network</span>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Ethereum Mainnet</span>
                    <Button variant="outline" size="icon">
                      <ChevronDownIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Deadman's Switch</span>
                  <div className="flex items-center gap-2">
                    <Switch id="deadman-switch" checked={deadmanSwitch} onCheckedChange={setDeadmanSwitch} />
                    <Label htmlFor="deadman-switch">{deadmanSwitch ? "Enabled" : "Disabled"}</Label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Earn Yield</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Aave</span>
                    <Button variant="outline">Deposit</Button>
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    Earn interest on your crypto assets by depositing them into the Aave protocol.
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Compound</span>
                    <Button variant="outline">Deposit</Button>
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    Earn interest on your crypto assets by depositing them into the Compound protocol.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Smart Accounts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Manage Safes</span>
                    <Button variant="outline">Manage</Button>
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    Manage your Smart Accounts and set up recovery mechanisms.
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Recovery</span>
                    <Button variant="outline">Set Up</Button>
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    Set up recovery mechanisms to protect your assets.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <footer className="border-t bg-muted/40 py-4">
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-muted-foreground">&copy; 2024 Web3 Wallet. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}


function CopyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  )
}


function RefreshCwIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </svg>
  )
}


function WalletIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  )
}
