"use client";

import { signOut } from "@/lib/firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignOut() {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const handleSignOut = async () => {
    setLoading(true);
    const isOk = await signOut();

    if (isOk) router.push("/");
    setLoading(false);
  };

  return (
    <button
      className={`bg-primary mt-1 max-w-xs w-full bg-red-500 text-gray-200 font-semibold px-2 py-1 rounded-md`}
      onClick={handleSignOut}
    >
      {isLoading ? "Loading..." : `Sign Out`}
    </button>
  );
}
