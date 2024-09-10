"use client";

import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  linkWithPopup,
} from "firebase/auth";
import LinkAccount, { LinkAccountProps } from "./LinkAccount";
import { toast } from "sonner";

import { UserRecord } from "firebase-admin/auth";

export default function LinkAccountButtons({
  currentUser,
}: {
  currentUser: UserRecord;
}) {
  const auth = getAuth();
  const providers: LinkAccountProps[] = [
    {
      name: "Github",
      provider: "github.com",
      action: async () => {
        const provider = new GithubAuthProvider();

        if (!auth.currentUser) {
          return;
        }
        try {
          await linkWithPopup(auth.currentUser, provider);

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
        if (!auth.currentUser) {
          return;
        }
        try {
          await linkWithPopup(auth.currentUser, provider);

          toast("Successfully linked account");
        } catch (error) {
          console.log(error);
        }
      },
    },
  ];

  const filtered = providers.filter(
    (provider) =>
      !currentUser.providerData.some(
        (user) => user.providerId === provider.provider.toLowerCase()
      )
  );

  if (auth.currentUser === null) return null;

  return (
    <>
      {filtered.map((provider, index) => (
        <LinkAccount key={index} {...provider} />
      ))}
    </>
  );
}
