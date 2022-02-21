import { ReactNode, useState } from "react";
import { InventoryList } from "./InventoryList";
export const Tabs = () => {
  const tabsConfig = [
    { title: "Armory" },
    { title: "Heroes" },
    { title: "Weapons" },
  ];
  const [currentTab, setCurrentTab] = useState("Heroes");
  const heroesItems = [
    {
      cloneId: 1,
      cloneName: "Clone #1",
      cloneImage: "https://i.ibb.co/bQYm5Lv/clone.png",
      cloneDescription:
        "Some description Some description Some description Some description",
      cloneStats: {
        health: 30,
        damage: 22,
        speed: 40,
      },
    },
    {
      cloneId: 2,
      cloneName: "Clone #2",
      cloneImage: "https://i.ibb.co/bQYm5Lv/clone.png",
      cloneDescription:
        "Some description Some description Some description Some description",
      cloneStats: {
        health: 30,
        damage: 22,
        speed: 40,
      },
    },
    {
      cloneId: 3,
      cloneName: "Clone #3",
      cloneImage: "https://i.ibb.co/bQYm5Lv/clone.png",
      cloneDescription:
        "Some description Some description Some description Some description",
      cloneStats: {
        health: 30,
        damage: 22,
        speed: 40,
      },
    },
    {
      cloneId: 4,
      cloneName: "Clone #4",
      cloneImage: "https://i.ibb.co/bQYm5Lv/clone.png",
      cloneDescription:
        "Some description Some description Some description Some description",
      cloneStats: {
        health: 30,
        damage: 22,
        speed: 40,
      },
    },
    {
      cloneId: 5,
      cloneName: "Clone #5",
      cloneImage: "https://i.ibb.co/bQYm5Lv/clone.png",
      cloneDescription:
        "Some description Some description Some description Some description",
      cloneStats: {
        health: 30,
        damage: 22,
        speed: 40,
      },
    },
    {
      cloneId: 6,
      cloneName: "Clone #6",
      cloneImage: "https://i.ibb.co/bQYm5Lv/clone.png",
      cloneDescription:
        "Some description Some description Some description Some description",
      cloneStats: {
        health: 30,
        damage: 22,
        speed: 40,
      },
    },
    {
      cloneId: 7,
      cloneName: "Clone #7",
      cloneImage: "https://i.ibb.co/bQYm5Lv/clone.png",
      cloneDescription:
        "Some description Some description Some description Some description",
      cloneStats: {
        health: 30,
        damage: 22,
        speed: 40,
      },
    },
  ];
  const weaponsItems = [
    {
      cloneId: 1,
      cloneName: "Gun #1",
      cloneImage: "https://i.ibb.co/bQYm5Lv/clone.png",
      cloneDescription:
        "Some description Some description Some description Some description",
      cloneStats: {
        health: 30,
        damage: 22,
        speed: 40,
      },
    },
    {
      cloneId: 2,
      cloneName: "Gun #2",
      cloneImage: "https://i.ibb.co/bQYm5Lv/clone.png",
      cloneDescription:
        "Some description Some description Some description Some description",
      cloneStats: {
        health: 30,
        damage: 22,
        speed: 40,
      },
    },
    {
      cloneId: 3,
      cloneName: "Gun #3",
      cloneImage: "https://i.ibb.co/bQYm5Lv/clone.png",
      cloneDescription:
        "Some description Some description Some description Some description",
      cloneStats: {
        health: 30,
        damage: 22,
        speed: 40,
      },
    },
    {
      cloneId: 4,
      cloneName: "Gun #4",
      cloneImage: "https://i.ibb.co/bQYm5Lv/clone.png",
      cloneDescription:
        "Some description Some description Some description Some description",
      cloneStats: {
        health: 30,
        damage: 22,
        speed: 40,
      },
    },
    {
      cloneId: 5,
      cloneName: "Gun #5",
      cloneImage: "https://i.ibb.co/bQYm5Lv/clone.png",
      cloneDescription:
        "Some description Some description Some description Some description",
      cloneStats: {
        health: 30,
        damage: 22,
        speed: 40,
      },
    },
    {
      cloneId: 6,
      cloneName: "Gun #6",
      cloneImage: "https://i.ibb.co/bQYm5Lv/clone.png",
      cloneDescription:
        "Some description Some description Some description Some description",
      cloneStats: {
        health: 30,
        damage: 22,
        speed: 40,
      },
    },
    {
      cloneId: 7,
      cloneName: "Gun #7",
      cloneImage: "https://i.ibb.co/bQYm5Lv/clone.png",
      cloneDescription:
        "Some description Some description Some description Some description",
      cloneStats: {
        health: 30,
        damage: 22,
        speed: 40,
      },
    },
  ];
  const ArmoryItems = [
    {
      cloneId: 1,
      cloneName: "Armory #1",
      cloneImage: "https://i.ibb.co/bQYm5Lv/clone.png",
      cloneDescription:
        "Some description Some description Some description Some description",
      cloneStats: {
        health: 30,
        damage: 22,
        speed: 40,
      },
    },
    {
      cloneId: 2,
      cloneName: "Armory #2",
      cloneImage: "https://i.ibb.co/bQYm5Lv/clone.png",
      cloneDescription:
        "Some description Some description Some description Some description",
      cloneStats: {
        health: 30,
        damage: 22,
        speed: 40,
      },
    },
    {
      cloneId: 3,
      cloneName: "Armory #3",
      cloneImage: "https://i.ibb.co/bQYm5Lv/clone.png",
      cloneDescription:
        "Some description Some description Some description Some description",
      cloneStats: {
        health: 30,
        damage: 22,
        speed: 40,
      },
    },
    {
      cloneId: 4,
      cloneName: "Armory #4",
      cloneImage: "https://i.ibb.co/bQYm5Lv/clone.png",
      cloneDescription:
        "Some description Some description Some description Some description",
      cloneStats: {
        health: 30,
        damage: 22,
        speed: 40,
      },
    },
    {
      cloneId: 5,
      cloneName: "Armory #5",
      cloneImage: "https://i.ibb.co/bQYm5Lv/clone.png",
      cloneDescription:
        "Some description Some description Some description Some description",
      cloneStats: {
        health: 30,
        damage: 22,
        speed: 40,
      },
    },
    {
      cloneId: 6,
      cloneName: "Armory #6",
      cloneImage: "https://i.ibb.co/bQYm5Lv/clone.png",
      cloneDescription:
        "Some description Some description Some description Some description",
      cloneStats: {
        health: 30,
        damage: 22,
        speed: 40,
      },
    },
    {
      cloneId: 7,
      cloneName: "Armory #7",
      cloneImage: "https://i.ibb.co/bQYm5Lv/clone.png",
      cloneDescription:
        "Some description Some description Some description Some description",
      cloneStats: {
        health: 30,
        damage: 22,
        speed: 40,
      },
    },
  ];
  return (
    <div className={"h-[inherit]"}>
      <div className={"border-fallout border-2 rounded-xl h-[inherit] "}>
        {currentTab === "Heroes" && (
          <InventoryList list={heroesItems} title={"Heroes"}></InventoryList>
        )}
        {currentTab === "Weapons" && (
          <InventoryList list={weaponsItems} title={"Weapons"}></InventoryList>
        )}
        {currentTab === "Armory" && (
          <InventoryList list={ArmoryItems} title={"Armory"}></InventoryList>
        )}
      </div>
      <div
        className={
          "sm:w-[375px] sm:p-[20px] h-[197px] mx-auto flex sm:mt-5 sm:mb-5 justify-around sm:bg-[url('../public/tubbuttn.png')]"
        }
      >
        {tabsConfig.map((item) => (
          <div key={item.title}>
            <p
              className={
                "text-fallout text font-bold uppercase text-center mt-[10px]"
              }
            >
              {item.title}
            </p>
            <div
              onClick={() => setCurrentTab(item.title)}
              className={
                currentTab === item.title
                  ? " h-[65px] w-[65px]   rounded-full bg-[url('../public/activebut.png')] "
                  : " h-[65px] w-[65px]  rounded-full bg-[url('../public/passivebut.png')]"
              }
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};
