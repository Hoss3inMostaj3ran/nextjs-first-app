import prisma from "@/prisma/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import bcrypt from "bcrypt";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials.password) return null;
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });
        if (!user) return null;
        else {
          // user exist in database
          const passwordMatched = await bcrypt.compare(
            credentials.password,
            user.hashedPassword!
          );
          return passwordMatched ? user : null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  // callbacks: {
  //   async signIn({ profile }) {
  //     if (!profile?.email) throw new Error("No Profile!");

  //     await prisma?.user.upsert({
  //       where: {
  //         email: profile.email,
  //       },
  //       create: {
  //         email: profile.email,
  //         name: profile.name!,
  //       },
  //       update: {
  //         name: profile.name,
  //       },
  //     });
  //     return true;
  //   },
  // },
};
