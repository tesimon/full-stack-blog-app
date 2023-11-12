import CatagorylList from "@/components/CatagoryList";
import Comments from "@/components/Comments";
import Loader from "@/components/Loader";
import { fetchSinglePostData } from "@/lib/apis";
import Image from "next/image";
import { Suspense } from "react";

const Blog = async ({ params }) => {
  const { slug } = params;
  const post = await fetchSinglePostData(slug);

  const content = post?.desc;

  return (
    <Suspense fallback={<Loader />}>
      <div className="max-w-[1500px] mx-auto blog flex flex-col max-[768px]:ml-4  gap-10">
        <div className="posts-intro flex flex-col sm:flex-row justify-between items-stretch">
          <div className="posts-title flex-[45%]">
            <h2 className="font-bold text-orange-500  font-mono text-[25px] mt-2 md:text-[30px]">
              {post.title}
            </h2>
          </div>
          {post.img && (
            <div className="image hidden lg:block relative h-[300px] flex-[55%]">
              <Image
                src={post.img}
                alt="travel"
                fill
                className="object-cover rounded-md"
              />
            </div>
          )}
        </div>
        <div className="post-details flex flex-col md:flex-row justify-between items-start gap-5">
          <div className="details flex-[70%] flex flex-col gap-10 justify-between font-sans ">
            <p>{post.views} views </p>

            <div
              className="posts"
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
            <div className="comments ">
              <Comments postId={slug} />
            </div>
          </div>
          <div className="relatedposts flex-[30%] flex flex-col justify-between  ">
            <div className="catagory">
              <CatagorylList
                title={"Catagory Lists"}
                style={"sm:self-start text-center "}
              />
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};
export default Blog;
