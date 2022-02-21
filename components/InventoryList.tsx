import { ReactNode, useState } from "react";
import { InventoryItem } from "./InventoryItem";
interface propsTestComponent {
  list: Array<any>;
  title: string;
}
export const InventoryList = ({ list, title }: propsTestComponent) => {
  // const vatname = [
  //   { name: "Vasya", age: 17 },
  //   { name: "Vika", age: 21 },
  //   { name: "Anton", age: 29 },
  // ];
  const varias = useState(5);
  const counter = varias[0];
  const setCounter = varias[1];
  return (
    <div className={"h-[inherit]"}>
      <h2
        className={
          "text-fallout space-x-2  font-bold text-2xl mx-6 top-[-32px] left-16 animate-pulse border-b-2 border-b-fallout sm:text-5xl"
        }
      >
        {title}
      </h2>
      <div
        className={
          "mx-6 pr-10 grid grid-cols-2 gap-6 md:grid-cols-2 h-[430px] sm:h-[315px] lg:grid-cols-2 mt-3 scrollbar-thin scrollbar-thumb-fallout sm:pr-20 pb-20  scrollbar-track-transparent overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
        }
      >
        {list.map((item) => (
          <InventoryItem key={item.id} item={item}></InventoryItem>
        ))}
      </div>
    </div>
  );
};
