import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import styles from "styles/Home.module.css";
import Link from "next/link";
// import prisma from "lib/prisma";
import api from "utils/api";

const FatChart = dynamic(() => import("components/chart"), {
  ssr: false,
});

// const getServerSideProps = async (context) => {
//   const res = await fetch(
//     `http://localhost:3000/api/user/${context.params.id}`
//   );
//   const data = await res.json();

//   return { props: { data: { ...data } } };
// }

export default function Home() {
  return <FatChart />;
}
