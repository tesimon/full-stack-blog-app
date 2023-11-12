import prisma from "@/lib/PrismaConnect";

export const GET = async () => {
  try {
    const posts = await prisma.post.findMany();

    return new Response(JSON.stringify({ posts }, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new Response(
      JSON.stringify(
        { messege: "failed to fetch all the posts from prisma" },
        { status: 500 }
      )
    );
  }
};
