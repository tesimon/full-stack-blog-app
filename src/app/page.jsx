import CardList from "@/components/CardList";
import CatagoryList from "@/components/CatagoryList";
import Featured from "@/components/Featured";
import Loader from "@/components/Loader";
import { fetchingAllPosts } from "@/lib/apis";
import { Suspense } from "react";

export default async function Home({ searchParams }) {
  const searchPageNumb = searchParams.page;
  const pageNumber = parseInt(searchPageNumb) || 1;
  const { posts } = await fetchingAllPosts();

  return (
    <div className=" ">
      <Suspense fallback={<Loader />}>
        <Featured posts={posts} />
        <CatagoryList title={"Popular Choises"} style={"self-center"} />
        <CardList searchPageNumb={pageNumber} />
      </Suspense>
    </div>
  );
}
