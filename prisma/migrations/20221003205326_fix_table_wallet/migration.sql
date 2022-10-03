/*
  Warnings:

  - You are about to drop the column `type` on the `wallet` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `wallet` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "wallet" DROP COLUMN "type",
DROP COLUMN "value",
ADD COLUMN     "balancevalue" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "fixedEntry" INTEGER DEFAULT 0,
ADD COLUMN     "fixedOutput" INTEGER DEFAULT 0,
ADD COLUMN     "variableEntry" INTEGER DEFAULT 0,
ADD COLUMN     "variableOutput" INTEGER DEFAULT 0,
ALTER COLUMN "description" SET DEFAULT 'transection';

-- DropEnum
DROP TYPE "Type";
