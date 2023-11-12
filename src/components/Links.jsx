"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Links = ({ setIsClicked }) => {
  const { status } = useSession();

  return (
    <>
      {status === "authenticated" ? (
        <Link href={"/"} className=" cursor-pointer " onClick={signOut}>
          Logout
        </Link>
      ) : (
        <Link
          onClick={() => setIsClicked((prev) => !prev)}
          href={"/login"}
          className=" cursor-pointer"
        >
          Login
        </Link>
      )}
      <Link
        onClick={() => setIsClicked((prev) => !prev)}
        href={"/create"}
        className=" cursor-pointer"
      >
        Create post
      </Link>

      <Link
        onClick={() => setIsClicked((prev) => !prev)}
        href={"/blog"}
        className=" cursor-pointer"
      >
        Blog
      </Link>
      <Link
        onClick={() => setIsClicked((prev) => !prev)}
        href={"/"}
        className=" cursor-pointer"
      >
        Homepage
      </Link>
    </>
  );
};
export default Links;
