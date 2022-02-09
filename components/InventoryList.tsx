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
    <div
      className={
        "mx-6 grid grid-cols-2 gap-6 md:grid-cols-3 h-[525px] lg:grid-cols-3 mt-10 scrollbar-thin scrollbar-thumb-fallout pr-20 pb-20  scrollbar-track-transparent overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
      }
    >
      <h2
        className={
          "text-fallout space-x-2 mt-10 font-bold text-5xl absolute ml-16 top-[-32px] left-16 animate-pulse"
        }
      >
        {title}
      </h2>
      {list.map((item) => (
        <InventoryItem key={item.id} item={item}></InventoryItem>
      ))}
    </div>
  );
};
