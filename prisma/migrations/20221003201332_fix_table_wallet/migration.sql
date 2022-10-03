/*
  Warnings:

  - You are about to drop the column `created_at` on the `wallet` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `wallet` table. All the data in the column will be lost.
  - You are about to drop the column `fixedEntry` on the `wallet` table. All the data in the column will be lost.
  - You are about to drop the column `fixedOutput` on the `wallet` table. All the data in the column will be lost.
  - You are about to drop the column `variableEntry` on the `wallet` table. All the data in the column will be lost.
  - You are about to drop the column `variableOutput` on the `wallet` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "wallet" DROP COLUMN "created_at",
DROP COLUMN "description",
DROP COLUMN "fixedEntry",
DROP COLUMN "fixedOutput",
DROP COLUMN "variableEntry",
DROP COLUMN "variableOutput";
