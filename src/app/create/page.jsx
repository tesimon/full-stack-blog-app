"use client";
import { app } from "@/utils/firebase";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Page = () => {
  // const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
  const [file, setfile] = useState(null);
  const [media, setMedia] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");
  const [value, setValue] = useState("");

  const { status, data: sessionUser } = useSession();
  const email = sessionUser?.user?.email;
  const router = useRouter();

  useEffect(() => {
    const storage = getStorage(app);
    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  if (status === "unauthenticated") {
    alert("please Sign in to create your own post");
    router.push("/login");
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        userEmail: email,
        slug: slugify(title),
        catSlug: catSlug || "All", //If not selected, choose the general category
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      router.push(`/blog/${data.slug}`);
    }
  };

  return (
    <div className="flex flex-col my-10  relative h-sc ">
      <div className="writting-palce bg-transparent shadow-sm shadow-slate-700 rounded-md p-2">
        <input
          type="text"
          placeholder="Title here"
          onChange={(e) => setTitle(e.target.value)}
          className="outline-none h-[60px] w-full rounded-md px-3 text-[20px] bg-transparent"
          required
        />
        <div className="bg-purple-400 w-[200px] sm:w-[400px]   h-[1px] my-2" />
        <div className="flex gap-2 items-center justify-start mt-3 ml-2 ">
          <input
            type="file"
            onChange={(e) => setfile(e.target.files[0])}
            className="hidden  "
            id="img"
          />
          <label htmlFor="img" className="cursor-pointer">
            {" "}
            <Image
              src={"/assets/add-image.png"}
              width={20}
              height={20}
              alt=""
            />
          </label>
          <select
            className="px-2 text-black font-bold outline-none "
            onChange={(e) => setCatSlug(e.target.value)}
            required
          >
            <option value="tech">tech</option>
            <option value="coding">coding</option>
            <option value="food">food</option>
            <option value="culture">culture</option>
            <option value="travel">travel</option>
          </select>
          <button
            className="py-2 px-3 bg-purple-600 text-white rounded-md mx-2 absolute top-[-50px] sm:top-10 right-5 disabled:bg-purple-950 disabled:text-white/80  "
            onClick={handleSubmit}
          >
            Post
          </button>
        </div>
        <ReactQuill
          value={value}
          placeholder="Write your article here ..."
          onChange={setValue}
          theme="snow"
        />
      </div>
    </div>
  );
};
export default Page;
