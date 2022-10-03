/*
  Warnings:

  - You are about to drop the column `type` on the `balances` table. All the data in the column will be lost.
  - You are about to drop the column `balancevalue` on the `wallet` table. All the data in the column will be lost.
  - Added the required column `type` to the `wallet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "balances" DROP COLUMN "type";

-- AlterTable
ALTER TABLE "wallet" DROP COLUMN "balancevalue",
ADD COLUMN     "type" "Type" NOT NULL,
ADD COLUMN     "value" INTEGER NOT NULL DEFAULT 0;
