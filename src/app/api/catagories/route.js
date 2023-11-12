import prisma from "@/lib/PrismaConnect";

export const GET = async () => {
  try {
    const catagories = await prisma.catagory.findMany();
    return new Response(JSON.stringify(catagories, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new Response(
      JSON.stringify(
        { messege: "failed to fetch catagories from prisma" },
        { status: 500 }
      )
    );
  }
};
