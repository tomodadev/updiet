import React from "react";
import dynamic from "next/dynamic";
import api from "utils/api";

const FatChart = dynamic(() => import("components/fatchart"), {
  ssr: false,
});

export const getServerSideProps = async (context) => {
  console.log(context);
  const res = await fetch(
    `http://localhost:3000/api/user/${context.params.id}`
    // `http://localhost:3000/api/user/[id]?id=1`
  );
  const data = await res.json();
  // console.log("111111", data);

  return { props: { data: { ...data } } };
};

export default function Chart(props) {
  return <FatChart></FatChart>;
}
