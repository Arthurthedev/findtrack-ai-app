'use server'

import { Prisma } from "@prisma/client"
import { createTransactionFormSchema } from "../_schemas/transaction"
import { prisma } from "@/src/lib/prisma"
import { auth } from "@/src/lib/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

type AddTransactionParams = Omit<Prisma.TransactionCreateInput, 'user' | 'userID'>

export const addTransaction = async (params: AddTransactionParams)=>{
    const session = await auth.api.getSession({
        headers: await headers()
    })

    const userID = session?.user.id

    if (!userID) {
        redirect("/sign-in")
    }


    const data = createTransactionFormSchema.parse(params)
    await prisma.transaction.create({
        data:{
            ...data,
            user: {connect: {id: userID}}
        }
    })
}