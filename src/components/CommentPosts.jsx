import formatedDate from "@/lib/formattedDate";
import Image from "next/image";

const CommentPosts = ({ item }) => {
  const createdAt = item.createdAt.substring(0, 10);
  const date = formatedDate(item.createdAt);
  return (
    <>
      <div key={item._id}>
        <div className="user flex gap-2">
          <div className="img">
            <Image
              src={item?.user?.image}
              alt=""
              width={50}
              height={50}
              className="rounded-md"
            />
          </div>
          <div className="info flex flex-col">
            <p>{item?.user?.name}</p>
            <p className="text-zinc-400">{item?.user?.email}</p>
          </div>
        </div>
        <div className="mt-3 mb-6">
          <div className="comments flex flex-col gap-1">
            <span className="text-zinc-400">{date}</span>
            <span>{item.postComment}</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default CommentPosts;
