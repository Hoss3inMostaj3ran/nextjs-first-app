import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcrypt";
// validation
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  // now we can add user to database
  // but we should sure to we dont have this email in database
  const user = await prisma?.user.findUnique({
    where: {
      email: body.email,
    },
  });

  // user exist!
  if (user)
    return NextResponse.json({ error: "User already exist!" }, { status: 400 });
  else {
    const hashedPassword = await bcrypt.hash(body.password, 16);
    const newUser = await prisma?.user.create({
      data: { email: body.email, hashedPassword },
    });

    return NextResponse.json({
      email: newUser?.email,
      password: newUser?.hashedPassword,
    });
  }
}
