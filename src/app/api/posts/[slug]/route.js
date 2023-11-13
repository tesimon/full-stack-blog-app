import prisma from "@/lib/PrismaConnect";

export const GET = async (req, { params }) => {
  const { slug } = params;

  try {
    const post = await prisma.post.update({
      where: { slug },
      include: { user: true },
      data: { views: { increment: 1 } },
    });
    return new Response(JSON.stringify(post, { status: 200 }));
  } catch (err) {
    return new Response(
      JSON.stringify(
        { messege: "failed to fetch single post from db" },
        { status: 500 }
      )
    );
  }
};
