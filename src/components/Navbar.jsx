"use client";
import Theme from "@/components/Theme";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Links from "./Links";
import SocialsIcon from "./SocialsIcon";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { status } = useSession();

  const MobileMenu = () => {
    return (
      <div className="mobileVersion flex justify-start   rounded-md items-center gap-6 flex-col absolute inset-0 z-50 sm:hidden ">
        <div className="flex flex-col items-center gap-5 justify-center text-[20px] ">
          <Links setIsClicked={setIsClicked} />
        </div>
        <div className="flex justify-center items-center space-x-2 sm:hidden ">
          <SocialsIcon />
        </div>
      </div>
    );
  };
  return (
    <>
      {isClicked && <MobileMenu />}
      <div className="flex justify-between py-5 sm:py-10 mx-4">
        <div className=" flex justify-center items-center ">
          <Link href={"/"} className="font-bold text-[22px]">
            Hello world
          </Link>
        </div>
        <div className=" sm:hidden flex items-center justify-center">
          <Theme />
        </div>
        <div className="menu-bar">
          {!isClicked ? (
            <Image
              className="sm:hidden cursor-pointer"
              src={"/assets/menu.png"}
              width={30}
              height={30}
              alt=""
              onClick={() => setIsClicked((prev) => !prev)}
            />
          ) : (
            <Image
              className="sm:hidden cursor-pointer"
              src={"/assets/close.png"}
              alt=""
              width={30}
              height={30}
              onClick={() => setIsClicked((prev) => !prev)}
            />
          )}
        </div>

        <div className="sm:flex justify-center items-center space-x-5 hidden">
          <Theme />
          {status === "authenticated" ? (
            <Link href={"/"} className=" cursor-pointer " onClick={signOut}>
              Logout
            </Link>
          ) : (
            <Link href={"/login"} className=" cursor-pointer">
              Login
            </Link>
          )}
          <Link href={"/create"} className=" cursor-pointer">
            Create post
          </Link>

          <Link href={"/blog"} className=" cursor-pointer">
            Blog
          </Link>
          <Link href={"/"} className=" cursor-pointer">
            Homepage
          </Link>
        </div>
        <div className="md:flex  justify-center items-center space-x-2 hidden ">
          <SocialsIcon />
        </div>
      </div>
    </>
  );
};

export default Navbar;
