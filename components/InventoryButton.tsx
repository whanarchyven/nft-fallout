import { ReactNode, useState } from "react";
import gayka from "../public/gayka.png";
import Image from "next/image";
interface propsTestComponent {
  title: string;
}

export const InventoryButton = ({ title }: propsTestComponent) => {
  return (
    <div className={"h-[40px] relative sm:h-[50px] sm:w-auto"}>
      <Image
        src={"https://i.ibb.co/DY7CDQB/32x32-buildings-furnitures.png"}
        alt={"gayka"}
        className={
          "inline-block h-[33px] w-[12px] absolute top-[6px]  sm:h-[33px] sm:w-[12px] left-[-5px]"
        }
      />
      <Image
        src={"https://i.ibb.co/DY7CDQB/32x32-buildings-furnitures.png"}
        alt={"gayka"}
        className={
          "inline-block h-[33px] w-[12px] absolute top-[6px] rotate-180 sm:h-[33px] sm:w-[12px] right-[-5px]"
        }
      />

      <button
        className={
          "w-full align-top h-full bg-up font-before font-bold text-[16px]  drop-shadow-[0px_8px_6px_rgba(0,0,0,0.25)] sm:text-[30px] text-[#404850] font-after"
        }
      >
        {title}
      </button>
    </div>
  );
};
