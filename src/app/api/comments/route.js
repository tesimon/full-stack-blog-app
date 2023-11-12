import prisma from "@/lib/PrismaConnect";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const postId = searchParams.get("postId");

  try {
    const comments = await prisma.comment.findMany({
      where: {
        ...(postId && { postSlug: postId }),
      },
      include: { user: true },
    });
    return new Response(JSON.stringify(comments, { status: 200 }));
  } catch (err) {
    return new Response(
      JSON.stringify(
        { messege: "failed to fetch comments from prisma" },
        { status: 500 }
      )
    );
  }
};

export const POST = async (req) => {
  const body = await req.json();

  const { userEmail } = body;
  if (!userEmail) {
    return;
  }
  try {
    const comment = await prisma.comment.create({
      data: body,
    });
    return new Response(JSON.stringify(comment, { status: 200 }));
  } catch (error) {
    console.log(error, "hahhahahahah");
    return new Response(
      JSON.stringify(
        { messege: "failed to post the comment to the db" },
        { status: 500 }
      )
    );
  }
};
