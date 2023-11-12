import Image from "next/image";

const Loader = () => {
  return (
    <div className="h-screen text-center flex flex-col items-center justify-center gap-2 ">
      <div>
        <Image
          src={"/loading.gif"}
          width={250}
          height={250}
          alt=""
          className="object-contain bg-transparent"
        />
      </div>
      <span className="font-bold font-sans">Loading...</span>
    </div>
  );
};
export default Loader;
