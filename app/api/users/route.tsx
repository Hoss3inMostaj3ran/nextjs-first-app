import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  // request : optional -> prevent from cashing request data
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  const alreadyExistEmail = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });
  if (alreadyExistEmail) {
    return NextResponse.json(
      { error: "The User Already Exist!" },
      { status: 400 }
    );
  } else {
    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
      },
    });

    // if !body => 400 error
    // else return => 201
    if (!validation.success)
      return NextResponse.json(validation.error.errors, { status: 400 });
    else return NextResponse.json(user, { status: 201 });
  }
}
