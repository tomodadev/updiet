//TODO
import prisma from "lib/prisma";

export default async function handler(req, res) {
  const id = req.query.id;
  console.log(id);
  try {
    console.log(id);
    const result = await prisma.user.findUnique({
      where: {
        id: Number(id),
      },
    });
    res.status(200).json(result);
  } catch (e) {
    console.error(e);
    res.status(500).json({ status: "failed" });
  }
}
