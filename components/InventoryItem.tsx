import { ReactNode, useState } from "react";
import { Popup } from "./Popup";
import Image from "next/image";
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
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={
        "border-fallout border-2 w-full sm:border-4 sm:p-8 sm:h-full sm:w-full "
      }
    >
      <div className={"m-auto sm:max-h-118 w-4/5 max-h-[140px]  sm:w-1/2 "}>
        <Image src={item.cloneImage} className={"w-fit"}></Image>
      </div>
      <h2
        className={
          "text-center text:xl sm:text-2xl font-bold uppercase animate-pulse text-fallout font-bold mb-5"
        }
      >
        {item.cloneName}
      </h2>
      <button
        className={
          "border-fallout p-2 border-2 sm:border-4 sm:p-3 w-full h-30 text-fallout font-bold uppercase hover:bg-fallout hover:text-black"
        }
        onClick={togglePopup}
      >
        See more
      </button>

      {/*<p className={"text-fallout"}>*/}
      {/*  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod*/}
      {/*  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim*/}
      {/*  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea*/}
      {/*  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate*/}
      {/*  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint*/}
      {/*  occaecat cupidatat non proident, sunt in culpa qui officia deserunt*/}
      {/*  mollit anim id est laborum.*/}
      {/*</p>*/}
      {isOpen && <Popup item={item} handleClose={togglePopup} />}
    </div>
  );
};
