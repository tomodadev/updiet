import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHouse } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <Link href="/input" passHref>
        {/* <div>
          <FontAwesomeIcon icon="faHouse" />
          <span>거래소</span>
        </div> */}
        <button>입력</button>
      </Link>
      <Link href="/" passHref>
        <button>그래프</button>
      </Link>
    </footer>
  );
};

export default Footer;
