"use client";

export type LinkAccountProps = {
  name: "Github" | "Google";
  provider: "google.com" | "github.com";
  action: () => void;
};

export default function LinkAccount({ provider, action }: LinkAccountProps) {
  return (
    <button
      className={`bg-primary mt-1 w-full max-w-xs bg-white text-slate-950 font-semibold px-2 py-1 rounded-md`}
      onClick={action}
    >
      {`Link ${provider}`}
    </button>
  );
}
