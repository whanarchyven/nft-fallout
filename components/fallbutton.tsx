import { ReactNode, useState } from "react";
import gayka from "../public/gayka.png";
import Image from "next/image";
interface propsTestComponent {
  title: string;
}

export const Fallbutton = ({ title }: propsTestComponent) => {
  return (
    <div className={"h-[40px] relative sm:h-[90px] sm:w-[320px]"}>
      <Image
        src={"https://i.ibb.co/WkYmRB8/gayka-1.png"}
        alt={"gayka"}
        className={
          "inline-block z-[1] h-[12px] w-[12px] absolute top-0 rotate-[315deg] sm:h-[20px] sm:w-[20px] left-0"
        }
      />
      <Image
        src={"https://i.ibb.co/WkYmRB8/gayka-1.png"}
        alt={"gayka"}
        className={
          "inline-block z-[1] h-[12px] w-[12px] absolute top-0 rotate-[45deg] sm:h-[20px] sm:w-[20px] right-0"
        }
      />
      <Image
        src={"https://i.ibb.co/WkYmRB8/gayka-1.png"}
        alt={"gayka"}
        className={
          "inline-block z-[1] h-[12px] w-[12px] absolute bottom-0 rotate-[135deg] sm:h-[20px] sm:w-[20px] right-0"
        }
      />
      <Image
        src={"https://i.ibb.co/WkYmRB8/gayka-1.png"}
        alt={"gayka"}
        className={
          "inline-block z-[1] h-[12px] w-[12px] absolute bottom-0 rotate-[225deg] sm:h-[20px] sm:w-[20px] left-0"
        }
      />
      <button
        className={
          "w-full h-full bg-after font-before font-bold text-[26px]  drop-shadow-[0px_8px_6px_rgba(0,0,0,0.25)] sm:text-[62px] text-up font-after"
        }
      >
        {title}
      </button>
    </div>
  );
};
