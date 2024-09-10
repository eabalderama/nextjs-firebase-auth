"use client";

export type SignInProps = {
  provider: "Google" | "Github";
  action: () => void;
};

export function SignIn({ provider, action }: SignInProps) {
  return (
    <button
      className="bg-primary w-full bg-white text-slate-950 font-semibold px-2 py-2 rounded-md"
      onClick={action}
    >
      {`Sign in with ${provider}`}
    </button>
  );
}
