import { balances } from "@prisma/client";

export type InsertBalanceData = Omit<balances, "id">