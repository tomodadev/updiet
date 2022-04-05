import prisma  from "lib/prisma";

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `http://localhost:3000/api/hacker/detail/${context.params.id}`
  );
  const hackerDetail = await res.json();

  const res1 = await fetch(
    `http://localhost:3000/api/replay/${context.params.id}`
  );
  const replay = await res1.json();
  return { props: { hacker: { ...hackerDetail }, replay: [...replay] } };





export const priceData = [

  {
    time: "2019-05-24",
    open: 192.54,
    high: 193.86,
    low: 190.41,
    close: 193.59,
  },
];
