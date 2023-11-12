import { fetchCatagoryData } from "@/lib/apis";
import Image from "next/image";
import Link from "next/link";

const CatagorylList = async ({ title, style }) => {
  const data = await fetchCatagoryData();
  return (
    <div className="flex flex-col items-center gap-4 justify-center mt-20 ">
      <h4 className={`font-bold  text-[25px] ${style}`}>{title}</h4>
      <div className="flex flex-col sm:flex-row justify-start gap-5  flex-wrap items-center my-10 ">
        {data.map((item) => (
          <Link
            href={`/blog?cat=${item.slug}`}
            className="flex justify-center items-center gap-1 w-[120px] h-[55px] bg-slate-700 rounded-md"
            key={item.slug}
          >
            <div className="img">
              <Image
                src={item.img}
                width={50}
                height={50}
                alt=""
                className="rounded-md "
              />
            </div>
            <span className="text-blue-300">{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CatagorylList;
