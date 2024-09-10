import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/firebase/firebase-admin";
import Image from "next/image";
import SignOut from "../components/SignOut";

export default async function DashboardPage() {
  const currentUser = await getCurrentUser();

  if (!currentUser) redirect("/");

  return (
    <main className="w-screen h-screen flex justify-center items-center font-mono">
      <div className="w-full max-w-screen-sm text-center">
        <h1 className="text-white font-semibold font-mono text-2xl">{`Welcome`}</h1>
        <div className="flex flex-row justify-center items-center gap-2">
          <Image
            width={32}
            height={32}
            priority
            src={currentUser.photoURL || ""}
            alt="Display photo"
            className="rounded-full"
          />
          <p className="text-xl">{`${currentUser.displayName}`}</p>
        </div>
        <SignOut />
      </div>
    </main>
  );
}
