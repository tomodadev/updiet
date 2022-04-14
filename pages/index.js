import React, { useEffect, useRef } from "react";
import styles from "styles/Home.module.css";
import dynamic from "next/dynamic";
// import { GetServerSideProps } from "next";
import Link from "next/link";
// import prisma from "lib/prisma";
import api from "utils/api";
const FatChart = dynamic(() => import("components/fatchart"), {
  ssr: false,
});

export const getServerSideProps = async () => {
  const res = await fetch(`http://localhost:3000/api/user/[id]?id=1`);
  const data = await res.json();
  console.log("!!!!");

  return { props: { data: { ...data } } };
};

export default function App(props) {
  console.log(props.data);
  return <FatChart></FatChart>;
}
