/*
  Warnings:

  - Added the required column `walletId` to the `balances` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "balances" ADD COLUMN     "walletId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "balances" ADD CONSTRAINT "balances_walletId_fkey" FOREIGN KEY ("walletId") REFERENCES "wallet"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
