import { users } from "@prisma/client";

export type userDataSingUp = Omit<users, "id" | "createdAt">

