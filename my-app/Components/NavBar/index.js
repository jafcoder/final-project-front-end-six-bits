import { useState } from "react";
import Link from "next/link";
import Logo from "../../public/images/logo.png";
import styles from "../../styles/navbar.module.css";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);
  const { user } = useUser();

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href="/">
          <a className={styles.navlogo}>
            <Image
              src={Logo}
              alt="logo"
              height="50"
              width="200"
              priority="true"
            />
          </a>
        </Link>
        <ul
          className={
            isOpen === false
              ? styles.navmenu
              : styles.navmenu + " " + styles.active
          }
        >
          <li className={styles.navitem}>
            <Link href="/">
              <a className={styles.navlink}>Home</a>
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link href="/browse">
              <a className={styles.navlink}>Browse</a>
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link href="/about">
              <a className={styles.navlink}>About</a>
            </Link>
          </li>

          {!user && (
            <li className={styles.navitem}>
              <Link href="/api/auth/login">
                <a className={styles.navlink}>Sign In</a>
              </Link>
            </li>
          )}

          {user && (
            <>
              <li className={styles.navitem}>
                <Link href="/profile">
                  <a className={styles.navlink}>Profile</a>
                </Link>
              </li>
              <li className={styles.navitem}>
                <Link href="/api/auth/logout">
                  <a className={styles.navlink}>Log Out</a>
                </Link>
              </li>
            </>
          )}
          {/* <li className={styles.navitem}>

                <a className={styles.navlink}>Profile</a>
      
            </li> */}
        </ul>
        <button
          className={
            isOpen === false
              ? styles.hamburger
              : styles.hamburger + " " + styles.active
          }
          onClick={openMenu}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </nav>
    </header>
  );
}
export default Navbar;

// const { user } = useUser();
// const [openLinks, setOpenLinks] = useState(false);
// const toggleNavbar = () => {
//   setOpenLinks(!openLinks);

// <div className={css.navbar}>
//   <div className={css.leftSide} id={openLinks ? "open" : "close"}>
//     <Image src={Logo} alt="logo" height="50" width="200" priority="true" />
//     <div className={css.hiddenLinks}>
//       <a>Home</a>
//       <a>Browse</a> <a>About</a> <a>Sign In</a>{" "}
//     </div>
//   </div>
//   <div className={css.rightSide}>
//     <Link href="/">
//       <a className={css.link}>Home</a>
//     </Link>
//     <Link href="/browse">
//       <a className={css.link}>Browse</a>
//     </Link>
//     <Link href="/about">
//       <a className={css.link}>About</a>
//     </Link>
//     {!user && (
//       <Link href="/api/auth/login">
//         <a className={css.signUp}>Sign In</a>
//       </Link>
//     )}
//     {user && (
//       <>
//         <Link href="/profile">
//           <a className={css.link}>Profile</a>
//         </Link>
//         <Link href="/api/auth/logout">
//           <a className={css.signUp}>Sign Up</a>
//         </Link>
//       </>
//     )}

//     {/* <button onClick={toggleNavbar}>
//       <ReorderIcon className={css.menuIcon} />
//     </button> */}
//   </div>
// </div>
