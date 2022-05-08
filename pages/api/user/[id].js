//TODO
import prisma from "lib/prisma";

export default async function handle(req, res) {
  console.log(req);
  // const id = req.query.id;
  // console.log(id);
  try {
    // console.log(id);
    // const result = await prisma.user.findUnique({
    //   where: {
    //     // name: '박찬우'
    //     user_id: Number(1),
    //   },
    // });

    const result = await prisma.Post.findMany();
    res.status(200).json(result);
  } catch (e) {
    console.error(e);
    res.status(500).json({ status: "failed" });
  }
}
