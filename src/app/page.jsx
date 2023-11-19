import CardList from "@/components/CardList";
import CatagoryList from "@/components/CatagoryList";
import Featured from "@/components/Featured";

import { fetchingAllPosts } from "@/lib/apis";


export default async function Home({ searchParams }) {
  const searchPageNumb = searchParams.page;
  const pageNumber = parseInt(searchPageNumb) || 1;
  const { posts } = await fetchingAllPosts();

  return (
    <div className=" ">
      
        <Featured posts={posts} />
        <CatagoryList title={"Popular Choises"} style={"self-center"} />
        <CardList searchPageNumb={pageNumber} />
     
    </div>
  );
}
