import React from "react";
import Link from "next/link";
import vegImage from "../public/images/produce-box.jpeg";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';

import css from "../styles/Home.module.css";
function Home() {
  return (
    <div className={css.home}>
        <h1 className={css.title}>SalVeg</h1>
        {/* <Image src={vegImage} alt="produce" ></Image> */}
        <h2 className={css.text}>Shapeless Not Tasteless</h2>
        <Link href="/browse">
          <a className={css.link}>Get Started</a>
        </Link>
        
      
    </div>
  );
}
export default Home;
