import { ReactNode, useState } from "react";
import gayka from "../public/gayka.png";
interface propsTestComponent {
  width: number;
  height: number;
  title: string;
}

export const Fallbutton = ({ width, height, title }: propsTestComponent) => {
  return (
    <div className={"h-[90px] relative w-[320px]"}>
      <img
        src={"https://i.ibb.co/Q6C8FHB/gayka.png"}
        alt={"gayka"}
        className={
          "h-[20px] inline-block absolute top-0 rotate-[315deg] w-[20px] left-0"
        }
      />
      <img
        src={"https://i.ibb.co/Q6C8FHB/gayka.png"}
        alt={"gayka"}
        className={
          "h-[20px] inline-block absolute top-0 rotate-[45deg] w-[20px] right-0"
        }
      />
      <img
        src={"https://i.ibb.co/Q6C8FHB/gayka.png"}
        alt={"gayka"}
        className={
          "h-[20px] inline-block absolute bottom-0 rotate-[135deg] w-[20px] right-0"
        }
      />
      <img
        src={"https://i.ibb.co/Q6C8FHB/gayka.png"}
        alt={"gayka"}
        className={
          "h-[20px] inline-block absolute bottom-0 rotate-[225deg] w-[20px] left-0"
        }
      />
      <button
        className={
          "w-full h-full bg-after font-bold  text-[62px] text-up font-after"
        }
      >
        {title}
      </button>
    </div>
  );
};
