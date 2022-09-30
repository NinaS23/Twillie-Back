/*
  Warnings:

  - You are about to drop the `balances` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `balance` to the `wallet` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "balances" DROP CONSTRAINT "balances_userId_fkey";

-- DropForeignKey
ALTER TABLE "balances" DROP CONSTRAINT "balances_walletId_fkey";

-- AlterTable
ALTER TABLE "wallet" ADD COLUMN     "balance" INTEGER NOT NULL;

-- DropTable
DROP TABLE "balances";
