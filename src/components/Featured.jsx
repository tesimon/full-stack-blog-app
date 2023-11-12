import Image from "next/image";
import Link from "next/link";

const Featured = ({ posts }) => {
  const sorted = posts?.sort((a, b) => parseInt(b.views) - parseInt(a.views));
  const sortedPosts = sorted.slice(0, 1);
  const content = sortedPosts[0]?.desc?.substring(40, 260);
  return (
    <div className="flex flex-col sm:justify-around justify-center sm:items-start items-center md:my-8 my-5 2xl:my-10 ">
      <h2 className=" text-center self-center  bg-clip-text  lg:text-[35px] text-[25px] sm:text-[30px] mb-10 text-slate-500 ">
        Hello there , if u here to <b>learn</b> something by reading...
        <br /> grab a <b>Coffee</b> and go ahead
      </h2>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex-1 relative h-[300px] hidden md:block">
          <Image
            src={sortedPosts[0]?.img || "/assets/tech-keyboard.jpg"}
            alt="tech keyboard"
            fill
            className="rounded-md object-cover "
          />
        </div>
        <div className="flex-1 flex space-y-3 flex-col justify-center items-baseline md:ml-4  mt-4 md:mt-0 ">
          <h3 className="font-bold text-orange-500  sm:text-sm text-xs flex justify-center items-baseline gap-1">
            {sortedPosts[0]?.title}
            <div className="w-[1px] h-[12px] mx-1 bg-red-600" />
            <span className="text-orange-300 inline-flex rounded-lg px-2 mx-1 text-xs bg-slate-700">
              {sortedPosts[0]?.views}
            </span>

            <span className="text-xs text-slate-600">views </span>
          </h3>
          <div
            className=" text-slate-500"
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          ></div>
          <Link
            href={`/blog/${sortedPosts[0]?.slug}`}
            className=" text-xs bg-teal-950 text-yellow-300 rounded-md px-2 py-2 w-max "
          >
            Read more..
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
