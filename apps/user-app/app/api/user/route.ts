import {PrismaClient} from "@repo/db/client";
import { NextResponse } from "next/server";

const client = new PrismaClient();

export const GET = async () => {
    await client.user.create({
        data: {
            email: "akshat12@gmail.com",
            name: "Akshat"
        }
    })

    const user = await client.user.findMany({
        where: {
            name: "Akshat"
        }
    })

    return NextResponse.json({
        message: "User created",
        user
    })
}