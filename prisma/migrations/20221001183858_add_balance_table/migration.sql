-- CreateTable
CREATE TABLE "balances" (
    "id" SERIAL NOT NULL,
    "walletid" INTEGER NOT NULL,
    "balance" INTEGER,

    CONSTRAINT "balances_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "balances" ADD CONSTRAINT "balances_walletid_fkey" FOREIGN KEY ("walletid") REFERENCES "wallet"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
