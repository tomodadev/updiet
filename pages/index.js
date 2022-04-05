import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import styles from "styles/Home.module.css";

const FatChart = dynamic(() => import("components/chart"), {
  ssr: false,
});

export default function Home() {
  return <FatChart />;
}
