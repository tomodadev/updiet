import prisma from "lib/prisma";

export default async function handler(req, res) {
  const {
    user_id,
    time,
    open,
    high,
    low,
    close,
    //  volume
  } = req.body;

  try {
    await prisma.Post.create({
      data: {
        time,
        open: Number(open),
        high: Number(high),
        low: Number(low),
        close: Number(close),
        User: {
          connect: { user_id: Number(user_id) },
        },
      },
      include: {
        User: true,
      },
    });
    res.status(200).json(res);
  } catch (e) {
    console.error(e);
    res.status(500).json({ status: "failed" });
  }
}
