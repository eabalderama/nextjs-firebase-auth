"use client";

import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  linkWithPopup,
} from "firebase/auth";
import LinkAccount, { LinkAccountProps } from "./LinkAccount";
import { toast } from "sonner";

import { useCurrentUser } from "@/hooks/useCurrentUser";

export default function LinkAccountButtons() {
  const auth = getAuth();
  const currentUser = useCurrentUser(auth);

  const providers: LinkAccountProps[] = [
    {
      name: "Github",
      provider: "github.com",
      action: async () => {
        const provider = new GithubAuthProvider();

        if (!currentUser) {
          return;
        }
        try {
          await linkWithPopup(currentUser, provider);

          toast("Successfully linked account");
        } catch (error) {
          console.log(error);
        }
      },
    },
    {
      name: "Google",
      provider: "google.com",
      action: async () => {
        const provider = new GoogleAuthProvider();
        if (!currentUser) {
          return;
        }
        try {
          await linkWithPopup(currentUser, provider);

          toast("Successfully linked account");
        } catch (error) {
          console.log(error);
        }
      },
    },
  ];

  const filtered = providers.filter(
    (provider) =>
      !currentUser?.providerData.some(
        (user) => user.providerId === provider.provider.toLowerCase()
      )
  );

  if (currentUser === null) return null;

  return (
    <>
      {filtered.map((provider, index) => (
        <LinkAccount key={index} {...provider} />
      ))}
    </>
  );
}
