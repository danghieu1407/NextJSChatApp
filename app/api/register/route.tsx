import bcrypt from 'bcrypt';
import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(
    request: Request,
) {
    try {
        const body = await request.json();
        const {
            email,
            name,
            password,
        } = body;
        if (!email) {
            return new NextResponse("Email is required", { status: 400 });
        } else if (!name) {
            return new NextResponse("Name is required", { status: 400 });
        } else if (!password) {
            return new NextResponse("Password is required", { status: 400 })
        } else if (!name && !email && !password) {
            return new NextResponse("All fields are required", { status: 400 })
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const user = await prisma.user.create({
            data: {
                email,
                name,
                hashedPassword,
            }
        });

        return NextResponse.json(user)
    } catch (error: any) {
        console.log(error);
        return new NextResponse(error.message, { status: 500 });
    }
}