import prisma from "@/lib/PrismaConnect";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const pageNumb = searchParams.get("page");
  const cat = searchParams.get("cat");

  try {
    const [post, count] = await prisma.$transaction([
      prisma.post.findMany({
        take: 4,
        skip: 3 * (pageNumb - 1),
        where: { ...(cat && { catSlug: cat }) },
        include: { user: true },
      }),
      prisma.post.count({ where: { ...(cat && { catSlug: cat }) } }),
    ]);

    return new Response(JSON.stringify({ post, count }, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new Response(
      JSON.stringify(
        { messege: "failed to fetch posts from prisma" },
        { status: 500 }
      )
    );
  }
};

//creating post and save to database

export const POST = async (req) => {
  const body = await req.json();

  const { userEmail } = body;
  if (!userEmail) {
    return;
  }
  try {
    const posts = await prisma.post.create({
      data: body,
    });
    return new Response(JSON.stringify(posts, { status: 200 }));
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify(
        { messege: "failed to post the blog to the db" },
        { status: 500 }
      )
    );
  }
};
