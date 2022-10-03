/*
  Warnings:

  - Added the required column `type` to the `balances` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "balances" ADD COLUMN     "type" "Type" NOT NULL;
