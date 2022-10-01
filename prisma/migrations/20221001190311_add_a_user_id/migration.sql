/*
  Warnings:

  - You are about to drop the column `walletid` on the `balances` table. All the data in the column will be lost.
  - Added the required column `userId` to the `balances` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "balances" DROP CONSTRAINT "balances_walletid_fkey";

-- AlterTable
ALTER TABLE "balances" DROP COLUMN "walletid",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "balances" ADD CONSTRAINT "balances_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
