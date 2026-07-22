import { prisma } from "@/src/lib/prisma";
import { auth } from "@/src/lib/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

export const getRecentTransactions = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    const userID = session?.user.id

    if (!userID) {
        redirect("/sign-in")
    }

    const lastTransactions = await prisma.transaction.findMany({
        where: {
            userID
        },
        orderBy: {
            date: "desc",
        },
        take: 3,
    });

    return lastTransactions
};
