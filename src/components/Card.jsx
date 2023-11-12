import formatedDate from "@/lib/formattedDate";
import Image from "next/image";
import Link from "next/link";
const Card = ({ post }) => {
  const createDate = formatedDate(post?.createdAt);
  const content = post?.desc?.substring(0, 150);

  return (
    <div
      className="flex justify-between items-center w-full sm:gap-6"
      key={post._id}
    >
      <div className="flex-[50%] relative h-[250px]  hidden md:block">
        <Image
          src={post.img || "/assets/tech-keyboard.jpg"}
          alt="tech keyboard"
          fill
          className="rounded-md object-cover "
        />
      </div>
      <div className=" flex-[50%] flex flex-col gap-3 ">
        <span className="text-slate-500 flex items-center gap-1">
          {createDate}
          <div className="w-[1px] h-[12px] mx-1 bg-red-600" />
          <span className="text-orange-300  rounded-lg px-2 mx-1 text-xs bg-slate-700">
            {post?.views} views
          </span>
        </span>
        <Link href={`/blog/${post.slug}`}>
          <h4 className="font-bold  text-orange-500  rounded-md px-1 ">
            {post.title}
          </h4>
        </Link>
        <p
          className=" text-slate-500"
          dangerouslySetInnerHTML={{ __html: content }}
        ></p>
        <Link
          href={`/blog/${post.slug}`}
          className="underline underline-offset-2  text-slate-500  "
        >
          Read more
        </Link>
      </div>
    </div>
  );
};
export default Card;
