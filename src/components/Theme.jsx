"use client";
import { ThemeContext } from "@/lib/ThemeContext";
import Image from "next/image";
import { useContext } from "react";

const Theme = () => {
  const { theme, toggleThemes } = useContext(ThemeContext);
  return (
    <div
      id="theme-toggle"
      className={`flex justify-around items-center relative ${
        theme === "dark" ? "bg-white " : "bg-black"
      }  rounded-[50px] p-[1px] w-[35px]  `}
      onClick={toggleThemes}
    >
      <Image src={"/assets/moon.png"} alt="moon" width={15} height={15} />

      <div
        className={` w-[15px] h-[15px] rounded-full  absolute  ${
          theme === "dark" ? "left-[1px] bg-black " : "right-[1px] bg-white "
        }`}
      ></div>

      <Image src={"/assets/sun.png"} alt="sun" width={15} height={15} />
    </div>
  );
};

export default Theme;
