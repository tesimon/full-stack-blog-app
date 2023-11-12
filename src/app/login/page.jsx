"use client";

import Loader from "@/components/Loader";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { Suspense } from "react";

const Page = () => {
  const { status } = useSession();

  if (status === "authenticated") {
    redirect("/");
  }

  return (
    <Suspense fallback={<Loader />}>
      <div className="w-[80vw] flex justify-center">
        {status === "loading" ? (
          <div className="h-screen text-center">Loading....</div>
        ) : (
          <div className=" my-5 flex flex-col justify-center items-center gap-5 bg-transparent shadow-sm shadow-purple-300 px-2 min-w-[280px]  h-[400px] rounded-md">
            <div className="button">
              <button
                className="bg-red-600 hover:bg-red-700 rounded-md text-white font-bold px-5 py-3 w-[200px]"
                onClick={() => signIn("google")}
              >
                Google
              </button>
            </div>
            <div className="button">
              <button
                className="bg-slate-900 hover:bg-slate-950 rounded-md text-white font-bold px-5 py-3 w-[200px]"
                onClick={() => signIn("github")}
              >
                Github
              </button>
            </div>
          </div>
        )}
      </div>
    </Suspense>
  );
};
export default Page;
