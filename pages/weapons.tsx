import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { TestComponent } from "../components/test-component";
import { Tabs } from "../components/tabs";
import { InventoryItem } from "../components/InventoryItem";
import { InventoryList } from "../components/InventoryList";
import { Fallbutton } from "../components/fallbutton";

// @ts-ignore
import styled, { keyframes } from "styled-components";
import {
  bounce,
  fadeIn,
  fadeInDown,
  fadeInUp,
  fadeInLeft,
  fadeInDownBig,
} from "react-animations";
// @ts-ignore
import { render } from "react-dom";
import { Navbar } from "../components/Navbar";
import { slide as Menu } from "react-burger-menu";
import { PipBoy } from "../components/PipBoy";
import { useState } from "react";
import { InventoryButton } from "../components/InventoryButton";

const FadeIn = styled.div`
  animation: infinite 2s ${keyframes`${fadeInLeft}`};
  width: 20%;
  position: absolute;
  top: 0;
`;

const suka = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    left: "36px",
    top: "36px",
  },
  bmBurgerBars: {
    background: "#BBC4CD",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
    display: "none",
  },
};
const Home: NextPage = () => {
  const [isInventoryOpen, setIsOpen] = useState(false);

  const togglePip = () => {
    setIsOpen(!isInventoryOpen);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>CLONNING CENTER</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://allfont.ru/allfont.css?fonts=a_machinaorto"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://allfont.ru/allfont.css?fonts=a_machinaortosht"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Spartan:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        <div className={"sm:hidden absolute top-0 left-0"}>
          <Menu
            width={"100%"}
            className={"absolute top-0 left-0"}
            styles={suka}
          >
            <a
              href={"/index"}
              className={
                " text-[35px] cursor-pointer font-before text-[#BBC4CD]"
              }
            >
              MAIN
            </a>
            <a
              href={"/weapons"}
              className={
                " text-[35px] cursor-pointer font-before text-[#BBC4CD]"
              }
            >
              WEAPONS
            </a>
            <a
              href={"/clones"}
              className={
                " text-[35px] cursor-pointer font-before text-[#BBC4CD]"
              }
            >
              CLONES
            </a>
            <a
              href={"/game"}
              className={
                " text-[35px] cursor-pointer font-before text-[#BBC4CD]"
              }
            >
              GAME (BETA)
            </a>
            <a
              href={"/docs"}
              className={
                " text-[35px] cursor-pointer font-before text-[#BBC4CD]"
              }
            >
              DOCS
            </a>
            <a
              href={"/airdrop"}
              className={
                " text-[35px] cursor-pointer font-before text-[#BBC4CD]"
              }
            >
              AIRDROP
            </a>
          </Menu>
          <div
            className={"text-up align-middle fixed right-[5%] top-[4%] z-[99] "}
            onClick={togglePip}
          >
            <InventoryButton
              title={isInventoryOpen ? "CLOSE INVENTORY" : "SHOW INVENTORY"}
            ></InventoryButton>
          </div>
        </div>
        {isInventoryOpen && (
          <div
            className={
              "flex-[1] flex w-full h-[100vh] justify-center items-center flex-column bg-[rgba(0,0,0,0.45)]"
            }
          >
            <PipBoy></PipBoy>
          </div>
        )}
      </main>
      <Navbar></Navbar>

      <div className={"absolute top-[50px] w-full sm:h-[80vh] sm:top-[12%]"}>
        <Image src={"/armoryBack.png"} layout={"fill"} />
      </div>

      <div>
        <div
          className={
            "absolute left-[10%] right-[10%] w-[80%] h-[70px] top-[42%] sm:w-[30%] sm:right-[5%] sm:left-auto sm:top-[70%] sm:h-[10vh]"
          }
        >
          <Fallbutton title={"BUY NOW"}></Fallbutton>
        </div>
        <h2
          className={
            "absolute text-[70px] top-[115px] left-auto w-full text-center font-before z-[10] normal text-up sm:w-auto  sm:text-left sm:text-[8vw] sm:right-[17%] sm:top-[15%]"
          }
        >
          ARMORY
        </h2>
        <h2
          className={
            "absolute text-[70px] top-[115px] left-auto w-full text-center font-before z-[9] font-bold sm:w-auto  sm:text-left  text-under sm:text-[8vw] sm:right-[17%] sm:top-[15%]"
          }
        >
          ARMORY
        </h2>

        {/*<div>*/}
        {/*  <h2*/}
        {/*      className={*/}
        {/*        "absolute text-[70px] top-[180px] w-full text-center sm:w-auto sm:text-left left-auto w-full text-center font-before z-[10] text-up sm:text-[8vw] sm:right-[17%] sm:top-[34%]"*/}
        {/*      }*/}
        {/*  >*/}
        {/*    CENTER*/}
        {/*  </h2>*/}
        {/*  <h2*/}
        {/*      className={*/}
        {/*        "absolute text-[70px] top-[180px] w-full text-center sm:w-auto sm:text-left left-auto w-full text-center font-before z-[9] font-bold  text-under sm:text-[8vw] sm:right-[17%] sm:top-[34%]"*/}
        {/*      }*/}
        {/*  >*/}
        {/*    CENTER*/}
        {/*  </h2>*/}
        {/*</div>*/}

        <p
          className={
            "text-center top-[60%] line-through-[118%] w-[90%] left-[5%] right-[5%]  text-[15px] sm:text-left absolute font-spartan font-normal sm:text-[1.8vw] text-[#E5E5E5] sm:w-[50%] h-[94px ] sm:left-[10%] sm:top-[45%]"
          }
        >
          For some, radioactive debris is junk, but not for Jim. Here you can
          easily find equipment and weapons, as long as you have something to
          pay for them.
        </p>
        {/*<p*/}
        {/*  className={*/}
        {/*    "text-center top-[80%] line-through-[118%] w-[90%] left-[5%] right-[5%]  text-[15px] sm:text-left absolute font-spartan font-[600] sm:text-[1.8vw] text-[#E5E5E5] sm:w-[50%] h-[56px ] sm:left-[10%] sm:top-[65%]"*/}
        {/*  }*/}
        {/*>*/}
        {/*  Activate a clone and start conquering the radioactive wasteland*/}
        {/*</p>*/}
      </div>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
