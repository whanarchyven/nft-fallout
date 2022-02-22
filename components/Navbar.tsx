import { ReactNode, useState } from "react";
import logo from "/public/logo.svg";
import { Fallbutton } from "./fallbutton";
import { InventoryButton } from "./InventoryButton";
import { Popup } from "./Popup";
import { PipBoy } from "./PipBoy";

export const Navbar = () => {
  const [isInventoryOpen, setIsOpen] = useState(false);

  const togglePip = () => {
    setIsOpen(!isInventoryOpen);
  };
  return (
    <div className="h-full w-full font-after h-[100px] bg-[#4A545E] fixed top-0 z-40">
      <div className={"h-full w-[20%] align-middle  inline-block"}>
        <img
          src={"https://i.ibb.co/bFYVWmp/Group-59.png"}
          className={"pt-[7%] m-auto"}
          alt="Test"
        />
      </div>
      <div className={"justify-around align-middle inline-flex w-[60%]  "}>
        <a className={"text-[#BBC4CD] font-bold text-[30px]"}>MAIN</a>
        <a className={"text-[#BBC4CD] font-bold text-[30px]"}>WEAPONS</a>
        <a className={"text-[#BBC4CD] font-bold text-[30px]"}>CLONES</a>
        <a className={"text-[#BBC4CD] font-bold text-[30px]"}>GAME (BETA)</a>
        <a className={"text-[#BBC4CD] font-bold text-[30px]"}>DOCS</a>
        <a className={"text-[#BBC4CD] font-bold text-[30px]"}>AIRDROP</a>
      </div>
      <div
        className={
          "text-up align-middle ml-auto mr-auto text-[40px] p-[20px] w-[20%] inline-block"
        }
        onClick={togglePip}
      >
        <InventoryButton
          title={isInventoryOpen ? "CLOSE INVENTORY" : "SHOW INVENTORY"}
        ></InventoryButton>
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
    </div>
  );
};
