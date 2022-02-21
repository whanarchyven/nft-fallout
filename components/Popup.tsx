import { ReactNode, useState } from "react";
import { InventoryItem } from "./InventoryItem";
interface propsTestComponent {
  item: any;
  handleClose: () => any;
}
export const Popup = ({ item, handleClose }: propsTestComponent) => {
  // const vatname = [
  //   { name: "Vasya", age: 17 },
  //   { name: "Vika", age: 21 },
  //   { name: "Anton", age: 29 },
  // ];
  const varias = useState(5);
  const counter = varias[0];
  const setCounter = varias[1];
  return (
    <div className="absolute w-[320px] h-[481px] left-[50%] right-[50%] ml-[-160px]  sm:h-[381px] sm:w-[510px] sm:ml-0 top-[100px] sm:left-[320px] bg-black z-50 border-fallout border-2 rounded-xl p-2 ">
      <div className="">
        <span
          className="text-fallout font-bold text-2xl right-0 ml-[95%]"
          onClick={handleClose}
        >
          x
        </span>
        <img src={item.cloneImage} className={"w-1/4 inline-block"} />
        <div className={"inline-block ml-[10%] align-top w-[65%]"}>
          <h2
            className={
              "text-fallout text-3xl font-black mb-[10px] border-b-2 border-b-fallout "
            }
          >
            {item.cloneName}
          </h2>
          <h3 className={"text-fallout text-xl mb-[20px]"}>
            {item.cloneDescription}
          </h3>
          <div
            className={"grid grid-cols-1 gap-2 md:grid-cols-1 lg:grid-cols-2"}
          >
            <p className={"text-fallout text-l"}>
              Health: {item.cloneStats.health}
            </p>
            <p className={"text-fallout text-l"}>
              Damage: {item.cloneStats.damage}
            </p>
            <p className={"text-fallout text-l"}>
              Speed: {item.cloneStats.speed}
            </p>
            <p className={"text-fallout text-l"}>
              Defence: {item.cloneStats.speed}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
