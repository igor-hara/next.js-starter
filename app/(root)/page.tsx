"use client";

import Scraper from "@/components/Scraper";

import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "@/firebase/config";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";

export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter();
  console.log("user: ", user);

  const userSession = sessionStorage.getItem("user");

  if (!user && !userSession) router.push("/sign-in");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 dark:bg-customDark">
      <button
        onClick={() => {
          signOut(auth);
          sessionStorage.removeItem("user");
        }}
        className="mt-6 rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        LOG out
      </button>
      <Scraper />
    </main>
  );
}
