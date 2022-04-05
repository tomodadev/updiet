import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import styles from "styles/Home.module.css";
import Link from "next/link";
import prisma  from "lib/prisma";
import  api from  'utils/api'
const FatChart = dynamic(() => import("components/chart"), {
  ssr: false,
});

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


export default function Home() {
  return <FatChart />;
}
