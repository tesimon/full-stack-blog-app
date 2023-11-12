import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="w-[90vw] max-w-[1500px] h-[1px] bg-orange-300 my-2" />
      <div className="flex flex-col max-[640px]:gap-2 sm:flex-row justify-around  borderbackdrop:blur-md py-10 max-[768px]:ml-4 ">
        <div className="flex flex-col gap-4 ">
          <span className="text-orange-300 inline-flex gap-2">
            Icons credit <p className="text-slate-500">Icons by icons8</p>{" "}
          </span>
        </div>
        <div className="links flex flex-col  gap-2 ">
          <span className="text-[20px]  underline underline-offset-4">
            links
          </span>
          <Link href={"/about"} className="text-gray-500 text-xs">
            About
          </Link>
          <Link href={"/blogs"} className="text-gray-500 text-xs">
            Home page
          </Link>
          <Link href={"/info"} className="text-gray-500 text-xs">
            Info
          </Link>
        </div>
        <div className="tags  flex flex-col  gap-2 flex-wrap  ">
          <span className="text-[20px] underline underline-offset-4">Tags</span>
          <Link href={"/blogs/coding"} className="text-gray-500 text-xs">
            Coding
          </Link>
          <Link href={"/blogs/tech"} className="text-gray-500 text-xs">
            Tech
          </Link>
          <Link href={"/blogs/travel"} className="text-gray-500 text-xs">
            Travel
          </Link>
          <Link href={"/blogs/food"} className="text-gray-500 text-xs">
            Food
          </Link>
          <Link href={"/blogs/culture"} className="text-gray-500 text-xs">
            Culture
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
