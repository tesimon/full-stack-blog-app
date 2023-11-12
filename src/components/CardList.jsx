import { fetchPostsData } from "@/lib/apis";
import Card from "./Card";
import CatagorylList from "./CatagoryList";
import Pagination from "./Pagination";
import TrendingPosts from "./TrendingPosts";

const CardList = async ({ searchPageNumb, catagory }) => {
  const { post, count } = await fetchPostsData(searchPageNumb, catagory);
  const sortedposts = post?.sort(
    (a, b) => parseInt(a.createdAt) - parseInt(b.createdAt)
  );

  return (
    <div>
      <div className="posts flex flex-col lg:flex-row justify-between items-start my-10 gap-8">
        <div className="post flex flex-col flex-[70%] ">
          <h3 className="text-[20px] font-bold my-10">Recent posts</h3>
          <div className="flex flex-col gap-5">
            {sortedposts?.map((item) => (
              <Card post={item} key={item._id} />
            ))}
          </div>
        </div>

        <div className="relatedposts flex-[30%] flex flex-col justify-between  ">
          <h3 className="text-[20px] my-10">popular trendings</h3>
          <div className="menues flex flex-col gap-7">
            <TrendingPosts posts={post} />
            <div className="catagory">
              <CatagorylList
                title={"Catagory Lists"}
                style={"sm:self-baseline self-center "}
              />
            </div>
          </div>
        </div>
      </div>
      <Pagination pageNumb={searchPageNumb} count={count} />
    </div>
  );
};
export default CardList;
