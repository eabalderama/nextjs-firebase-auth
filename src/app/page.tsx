import Image from "next/image";
import Firebase from "@/assets/firebase.svg";
import { SignInWithGoogle } from "./components/SignInGoogle";
import { isUserAuthenticated } from "@/lib/firebase/firebase-admin";
import { redirect } from "next/navigation";

export default async function Home() {
  if (await isUserAuthenticated()) redirect("/dashboard");
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-row justify-center gap-4">
          <Image
            className="dark:invert"
            src="https://nextjs.org/icons/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <Image
            src={Firebase}
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </div>
        <div className="w-full flex flex-row justify-center items-center">
          <SignInWithGoogle />
        </div>
      </main>
    </div>
  );
}
