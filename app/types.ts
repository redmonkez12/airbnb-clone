import { User } from "@prisma/client";

export type SafeUSer = Omit<User, "createdAt" | "updatedAt" | "emailVerified"> &
    {
        createdAt: string;
        updatedAt: string;
        emailVerified: string | null;
    }