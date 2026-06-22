import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(){
    const ram = await prisma.user.findMany();
    return NextResponse.json(ram)
}