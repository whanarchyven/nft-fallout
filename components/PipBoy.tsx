import { ReactNode, useState } from "react";
import { InventoryItem } from "./InventoryItem";
import { Tabs } from "./tabs";

export const PipBoy = () => {
  // const vatname = [
  //   { name: "Vasya", age: 17 },
  //   { name: "Vika", age: 21 },
  //   { name: "Anton", age: 29 },
  // ];

  return (
    <div
      className={
        "fixed mb-[100px] items-center bg-cover h-[100vh] bg-center bg-no-repeat bg-[url('../public/mobilekpk.png')] sm:bg-[url('../public/pipboy.png')] sm:fixed sm:items-center sm:bg-no-repeat sm:h-[660px] sm:w-[1000px] sm:bg-auto   "
      }
    >
      <div
        className={
          "mt-[100px] ml-auto mr-auto w-[85%]  sm:h-[381px] sm:w-[510px] sm:mr-0 sm:ml-[320px]"
        }
      >
        <Tabs></Tabs>
      </div>
    </div>
  );
};
