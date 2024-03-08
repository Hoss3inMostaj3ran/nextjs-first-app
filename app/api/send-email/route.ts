import { NextResponse } from "next/server";
import { Resend } from "resend";
import WelcomeTemplate from "@/emails/WelcomeTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "hoss3inmostaj3ran0916@gmail.com",
    subject: "Hello World",
    html: `<WelcomeTemplate name="Hossein"/>`,
  });
  return NextResponse.json({});
}
