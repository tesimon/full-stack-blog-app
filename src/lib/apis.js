//catagory lists fetching
export const fetchCatagoryData = async () => {
  const response = await fetch("http://localhost:3000/api/catagories", {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("failed to fetch the catagory lists ");
  }
  return response.json();
};

//posts fetching

export const fetchPostsData = async (pageNumb, catagory) => {
  const response = await fetch(
    `http://localhost:3000/api/posts?page=${pageNumb || ""}&cat=${
      catagory || ""
    }`,
    {
      cache: "no-store",
    }
  );
  if (!response.ok) {
    throw new Error("failed to fetch the posts lists");
  }
  return response.json();
};

//fetching all posts

export const fetchingAllPosts = async () => {
  const res = await fetch("http://localhost:3000/api/allposts");
  if (!res.ok) {
    throw new Error("failed to fetch all the posts lists");
  }
  return res.json();
};
//single post fetching

export const fetchSinglePostData = async (slug) => {
  const response = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("failed to fetch the single post ");
  }
  return response.json();
};

//comments fetching

export const fetchingCommentsData = async (url) => {
  const response = await fetch(url);
  if (!response.ok)
    throw new Error("failed to fetch the comments from the client side");
  return response.json();
};

//posting comment

// export const postingComment = async (comment, postId) => {

// };
