/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `balances` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "balances_userId_key" ON "balances"("userId");
