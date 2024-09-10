"use client";

import { signInWithGoogle, signInWithGithub } from "@/lib/firebase/auth";
import { SignIn, SignInProps } from "./SignIn";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function ProviderButtons() {
  const router = useRouter();
  const providers: SignInProps[] = [
    {
      provider: "Google",
      action: async () => {
        const isOk = await signInWithGoogle();
        let message = "Error logging in!";

        if (isOk === true) {
          router.push("/dashboard");
          return;
        }
        if (typeof isOk === "string") {
          message = isOk;
        }
        toast(message);
      },
    },
    {
      provider: "Github",
      action: async () => {
        const isOk = await signInWithGithub();
        let message = "Error logging in!";

        if (isOk === true) {
          router.push("/dashboard");
          return;
        }
        if (typeof isOk === "string") {
          message = isOk;
        }
        toast(message);
      },
    },
  ];

  return (
    <>
      {providers.map((provider, index) => (
        <SignIn key={index} {...provider} />
      ))}
    </>
  );
}
