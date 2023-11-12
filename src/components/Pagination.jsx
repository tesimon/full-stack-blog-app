"use client";
import { useRouter } from "next/navigation";

const Pagination = ({ pageNumb, count }) => {
  const pageperNumb = parseInt(pageNumb) || 1;
  const router = useRouter();
  const nextpage = count > 4 * pageperNumb - 1;
  const prevpage = pageNumb - 1 > 0;

  return (
    <div className="flex justify-around my-10 flex-wrap ">
      <button
        className="bg-slate-800 w-[90px] py-1 rounded-md text-orange-300 disabled:text-gray-400 disabled:cursor-not-allowed "
        onClick={() => router.push(`?page=${pageperNumb - 1}`)}
        disabled={!prevpage}
      >
        Previous
      </button>
      <button
        className="bg-teal-900  py-1 rounded-md text-orange-300 disabled:text-gray-400 w-[90px] disabled:cursor-not-allowed"
        onClick={() => router.push(`?page=${pageperNumb + 1}`)}
        disabled={!nextpage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
