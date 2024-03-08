import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

// Method 1: using Interface <3
interface Props {
  params: { id: string };
}
// version 1:
export async function GET(request: NextRequest, { params: { id } }: Props) {
  //   Fetch data from db
  //   if data not exist return 404
  //   else return  data
  const user = await prisma.user.findUnique({ where: { id: id } });

  if (!user) {
    return NextResponse.json([
      {
        error: "This User does'nt exist in database",
      },
      { status: "404" },
    ]);
  } else {
    return NextResponse.json(user);
  }
}
// version 2:
// export async function GET(
//   request: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   //   Fetch data from db
//   //   if data not exist return 404
//   //   else return  data
//   const user = await prisma.user.findUnique({
//     where: { id: parseInt(params.id) },
//   });

//   if (!user) {
//     return NextResponse.json([
//       {
//         error: "This User does'nt exist in database",
//       },
//       { status: "404" },
//     ]);
//   } else {
//     return NextResponse.json(user);
//   }
// }
export async function PUT(request: NextRequest, { params: { id } }: Props) {
  /**
   * +++++++++++ Update +++++++++++
   * 1. validate the request body
   *    if invalid -> return 400
   * 2. search that given id
   *    if id notfound! -> return 404
   * 3. update user
   * 4. send update response
   */
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const user = await prisma.user.findUnique({
    where: { id: id },
  });
  if (!user)
    return NextResponse.json({ error: "User Not Founded!" }, { status: 404 });

  const updatedUser = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      name: body.name,
      email: body.email,
    },
  });
  return NextResponse.json(updatedUser);
}
export async function DELETE(request: NextRequest, { params: { id } }: Props) {
  /**
   * +++++++++++ Delete +++++++++++
   * 1. find the specific id
   * 2. if id notfound! -> return 404
   * 3. delete user
   * 4. send delete response
   */
  // the user notfound
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  if (!user)
    return NextResponse.json({ error: "the user notfound!" }, { status: 404 });
  else {
    await prisma.user.delete({
      where: {
        id: user.id,
      },
    });
    return NextResponse.json({});
  }
}

// Method 2:
// export function GET(
//   request: NextRequest,
//   { params: { id } }: { params: { id: number } }
// ) {
//   //   Fetch data from db
//   //   if data not exist return 404
//   //   else return  data
//   if (id > 10) {
//     return NextResponse.json([
//       {
//         error: "This User doesnt exist in database",
//       },
//       { status: "404" },
//     ]);
//   } else {
//     return NextResponse.json([{ id: "1", name: "hossein" }, { status: "200" }]);
//   }
// }
