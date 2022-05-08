import React, { useEffect, useRef } from "react";
import styles from "styles/Home.module.css";
import dynamic from "next/dynamic";
// import { GetServerSideProps } from "next";
// import prisma from "lib/prisma";
import api from "utils/api";
import Footer from "components/footer";

const FatChart = dynamic(() => import("components/fatchart"), {
  ssr: false,
});

export const getServerSideProps = async () => {
  // const res = await fetch(`http://localhost:3000/api/user/[id]?id=1`);
  const res = await fetch(`http://localhost:3000/api/user/[id]?id=1`);
  const data = await res.json();

  // return { props: { data: { ...data } } };
  return { props: { post: [...data] } };
};

export default function App(props) {
  console.log(props);
  return (
    <div className="app-container">
      <FatChart priceData={props.post}></FatChart>
      <Footer></Footer>
    </div>
  );
}
