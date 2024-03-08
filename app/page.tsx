import { getServerSession } from "next-auth";
import Link from "next/link";
import lamborgini from "@/public/images/lamborgini.jpg";
import Image from "next/image";
import { Metadata } from "next";
import { authOptions } from "./api/auth/authOptions";

// export async function generateMetadata(): Promise<Metadata> {
//   const product = await fetch("");
//   return {
//     title: "product metadata",
//     description: "....",
//   };
// }

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="relative h-screen">
      <h1 className="text-5xl font-semibold py-4">Next Js</h1>
      <h2 className="text-4xl">
        Hello {session && <span>{session?.user?.email}</span>}. Welcome!
      </h2>
      <Link className="btn-primary btn-link" href="/users">
        Users
      </Link>
      <Image
        alt="car"
        src={lamborgini}
        width={450}
        height={300}
        // fill
        // className="object-cover"
        // sizes="100vw"
        // full responsive :
        // sizes="(max-width:480px) 100vw ,(max-width:768px) 50vw, 33vw"
        quality={100} // default : 70
      />
      <p className="text-3xl my-5">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus ab
        quos reprehenderit nam impedit vitae ducimus at! Perspiciatis veritatis
        aspernatur architecto ut. Unde quis repellendus accusamus non
        accusantium distinctio officiis.
      </p>
      <Image
        alt="beach"
        src="https://s3.amazonaws.com/my-bucket/profile.png"
        width={450}
        height={300}
      />
    </main>
  );
}
