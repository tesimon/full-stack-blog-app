import CardList from "@/components/CardList";
import Loader from "@/components/Loader";
import { Suspense } from "react";

const page = ({ searchParams }) => {
  const { cat, page } = searchParams;
  const catagory = cat;
  const pages = parseInt(page) || 1;
  return (
    <Suspense fallback={<Loader />}>
      <div className="blogs flex flex-col justify-center items-center">
        <div className="title">
          <h2 className="bg-transparent text-slate-500 text-clip capitalize text-lg ">
            {cat}
            <div className=" bg-teal-700 h-[2px] my-5" />
          </h2>
        </div>
        <div className="content">
          <CardList searchPageNumb={pages} catagory={catagory} />
        </div>
      </div>
    </Suspense>
  );
};
export default page;
