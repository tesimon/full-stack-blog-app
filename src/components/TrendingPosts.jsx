import Image from "next/image";

const TrendingPosts = ({ posts }) => {
  return (
    <div>
      {posts?.map((post) => (
        <div className="flex  flex-col  justify-start  mb-5" key={post._id}>
          <div className="flex items-center gap-2">
            <div className="images flex-[30%] ">
              <Image
                src={post.img || "/assets/tech-keyboard.jpg"}
                width={50}
                height={50}
                className="rounded-md w-[80px]"
                alt=""
              />
            </div>
            <div className="texts flex flex-col flex-[70%] gap-1">
              <h5 className="text-teal-600">{post.title}</h5>
              <div className="flex  items-center gap-1 ">
                <p className="text-slate-500">{post?.user?.name}</p>
                <div className="w-[2px] h-[12px] bg-orange-500" />
                <p className="text-slate-500">
                  {post.createdAt.substring(0, 10)}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrendingPosts;
