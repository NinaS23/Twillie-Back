import { wallet } from "@prisma/client"

export type walletDataInput = Omit<wallet, "id" | "created_at"| "balancevalue" | "userId"  >

export type insertWalletData = Omit<wallet, "id" | "created_at" >