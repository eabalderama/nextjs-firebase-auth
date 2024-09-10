"use client";

import { signInWithGoogle } from "@/lib/firebase/auth";
import { useRouter } from "next/navigation";

export function SignInWithGoogle() {
  const router = useRouter();

  const handleSignIn = async () => {
    const isOk = await signInWithGoogle();

    if (isOk) router.push("/dashboard");
  };

  return (
    <button
      className="bg-primary bg-white text-slate-950 font-semibold px-2 py-2 rounded-md"
      onClick={handleSignIn}
    >
      Sign In with Google
    </button>
  );
}
