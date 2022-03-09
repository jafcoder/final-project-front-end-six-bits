import React from "react";
import Link from "next/link";
import vegImage from "../public/images/produce-box.jpeg";
import Image from "next/image";
import homeImage from "../public/images/vegbox.jpg";
import homeImage1 from "../public/images/homeImage1Copy.png";
import homeImage2 from "../public/images/homeImage2.png";
import homeImage3 from "../public/images/homeImage3.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import css from "../styles/Home.module.css";

function Home() {
  return (
    <div className={css.home}>
      <Head>
        <title>SalVeg</title>
      </Head>
      
      <div className={css.rightSide}>
        <div className={css.titleText}>
          <span>Shapeless {name && `${name}`} </span>
          <br></br> <span className={css.altColour}> not</span> <br></br>
          <span>Tasteless</span>
        </div>
        <p className={css.subText}>
          Get connected to local fresh food within your community<br></br> and
          help prevent food waste along the way!
        </p>
        <Link href="/browse" passHref>
          <button className={css.link}>Get Started</button>
        </Link>
      </div>
       
      <div className={css.leftSide}>
        <Image
          src={homeImage1}
          alt={"vegetables"}
          height={600}
          width={700}
        ></Image>
      </div>
    </div>
      
  );
}
export default Home;

{
  /* <Image
        src={homeImage1}
        alt={"vegetables"}
        height={500}
        width={500}
      ></Image>
      <Link href="/browse">
        <a className={css.link}>Get Started</a>
      </Link> */
}
