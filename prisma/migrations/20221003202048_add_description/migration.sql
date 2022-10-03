/*
  Warnings:

  - Added the required column `description` to the `wallet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "wallet" ADD COLUMN     "description" TEXT NOT NULL;
