import prisma from "@/lib/PrismaConnect";

export const GET = async (req, { params }) => {
  const { slug } = params;
  console.log(slug);
  try {
    const post = await prisma.post.update({
      where: { slug },
      include: { user: true },
      data: { views: { increment: 1 } },
    });
    return new Response(JSON.stringify(post, { status: 200 }));
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
