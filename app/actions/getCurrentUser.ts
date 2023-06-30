import { db } from "@/app/libs/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export async function getSession() {
    return await getServerSession(authOptions);
}

export async function getCurrentUser() {
    try {
        const session = await getSession();

        console.log(session, "what");

        if (!session?.user?.email) {
            return null;
        }

        const currentUser = await db.user.findUnique({
            where: {
                email: session.user.email,
            },
        });

        if (!currentUser) {
            return null;
        }

        return currentUser;
    } catch (e) {
        return null;
    }
}

