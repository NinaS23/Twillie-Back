-- CreateTable
CREATE TABLE "wallet" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "fixedEntry" INTEGER DEFAULT 0,
    "variableEntry" INTEGER DEFAULT 0,
    "fixedOutput" INTEGER DEFAULT 0,
    "variableOutput" INTEGER DEFAULT 0,

    CONSTRAINT "wallet_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "wallet" ADD CONSTRAINT "wallet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
