import { ReactNode, useState } from "react";

interface propsTestComponent {
  item: {
    cloneId: number;
    cloneName: string;
    cloneImage: string;
    cloneDescription: string;
    cloneStats: [{ stat1: string; stat2: string; stat3: string }];
  };
}
export const InventoryItem = ({ item }: propsTestComponent) => {
  // const vatname = [
  //   { name: "Vasya", age: 17 },
  //   { name: "Vika", age: 21 },
  //   { name: "Anton", age: 29 },
  // ];
  const varias = useState(5);
  const counter = varias[0];
  const setCounter = varias[1];
  return (
    <div className={"border-fallout border-4 p-8 h-full w-full "}>
      <div className={"max-h-118 w-1/2 m-auto"}>
        <img src={item.cloneImage} className={"w-fit"}></img>
      </div>
      <h2
        className={
          "text-center text-2xl font-bold uppercase animate-pulse text-fallout font-bold mb-5"
        }
      >
        {item.cloneName}
      </h2>
      <button
        className={
          "border-fallout border-4 p-3 w-full h-30 text-fallout font-bold uppercase hover:bg-fallout hover:text-black"
        }
      >
        See more
      </button>
    </div>
  );
};
