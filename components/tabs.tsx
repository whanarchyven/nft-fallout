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
      cloneStats: [{ stat1: "30" }, { stat2: "22" }, { stat3: "111" }],
    },
    {
      cloneId: 2,
      cloneName: "Clone #2",
      cloneImage: "https://i.ibb.co/bQYm5Lv/clone.png",
      cloneDescription:
        "Some description Some description Some description Some description",
      cloneStats: [{ stat1: "30" }, { stat2: "22" }, { stat3: "111" }],
    },
    {
      cloneId: 3,
      cloneName: "Clone #3",
      cloneImage: "https://i.ibb.co/bQYm5Lv/clone.png",
      cloneDescription:
        "Some description Some description Some description Some description",
      cloneStats: [{ stat1: "30" }, { stat2: "22" }, { stat3: "111" }],
    },
    {
      cloneId: 4,
      cloneName: "Clone #4",
      cloneImage: "https://i.ibb.co/bQYm5Lv/clone.png",
      cloneDescription:
        "Some description Some description Some description Some description",
      cloneStats: [{ stat1: "30" }, { stat2: "22" }, { stat3: "111" }],
    },
    {
      cloneId: 5,
      cloneName: "Clone #5",
      cloneImage: "https://i.ibb.co/bQYm5Lv/clone.png",
      cloneDescription:
        "Some description Some description Some description Some description",
      cloneStats: [{ stat1: "30" }, { stat2: "22" }, { stat3: "111" }],
    },
    {
      cloneId: 6,
      cloneName: "Clone #6",
      cloneImage: "https://i.ibb.co/bQYm5Lv/clone.png",
      cloneDescription:
        "Some description Some description Some description Some description",
      cloneStats: [{ stat1: "30" }, { stat2: "22" }, { stat3: "111" }],
    },
    {
      cloneId: 7,
      cloneName: "Clone #7",
      cloneImage: "https://i.ibb.co/bQYm5Lv/clone.png",
      cloneDescription:
        "Some description Some description Some description Some description",
      cloneStats: [{ stat1: "30" }, { stat2: "22" }, { stat3: "111" }],
    },
  ];
  const weaponsItems = [
    {
      cloneId: 1,
      cloneName: "Gun #1",
      cloneImage: "https://i.ibb.co/bQYm5Lv/clone.png",
      cloneDescription:
        "Some description Some description Some description Some description",
      cloneStats: [{ stat1: "30" }, { stat2: "22" }, { stat3: "111" }],
    },
    {
      cloneId: 2,
      cloneName: "Gun #2",
      cloneImage: "https://i.ibb.co/bQYm5Lv/clone.png",
      cloneDescription:
        "Some description Some description Some description Some description",
      cloneStats: [{ stat1: "30" }, { stat2: "22" }, { stat3: "111" }],
    },
    {
      cloneId: 3,
      cloneName: "Gun #3",
      cloneImage: "https://i.ibb.co/bQYm5Lv/clone.png",
      cloneDescription:
        "Some description Some description Some description Some description",
      cloneStats: [{ stat1: "30" }, { stat2: "22" }, { stat3: "111" }],
    },
    {
      cloneId: 4,
      cloneName: "Gun #4",
      cloneImage: "https://i.ibb.co/bQYm5Lv/clone.png",
      cloneDescription:
        "Some description Some description Some description Some description",
      cloneStats: [{ stat1: "30" }, { stat2: "22" }, { stat3: "111" }],
    },
    {
      cloneId: 5,
      cloneName: "Gun #5",
      cloneImage: "https://i.ibb.co/bQYm5Lv/clone.png",
      cloneDescription:
        "Some description Some description Some description Some description",
      cloneStats: [{ stat1: "30" }, { stat2: "22" }, { stat3: "111" }],
    },
    {
      cloneId: 6,
      cloneName: "Gun #6",
      cloneImage: "https://i.ibb.co/bQYm5Lv/clone.png",
      cloneDescription:
        "Some description Some description Some description Some description",
      cloneStats: [{ stat1: "30" }, { stat2: "22" }, { stat3: "111" }],
    },
    {
      cloneId: 7,
      cloneName: "Gun #7",
      cloneImage: "https://i.ibb.co/bQYm5Lv/clone.png",
      cloneDescription:
        "Some description Some description Some description Some description",
      cloneStats: [{ stat1: "30" }, { stat2: "22" }, { stat3: "111" }],
    },
  ];
  const ArmoryItems = [
    {
      cloneId: 1,
      cloneName: "Armory #1",
      cloneImage: "https://i.ibb.co/bQYm5Lv/clone.png",
      cloneDescription:
        "Some description Some description Some description Some description",
      cloneStats: [{ stat1: "30" }, { stat2: "22" }, { stat3: "111" }],
    },
    {
      cloneId: 2,
      cloneName: "Armory #2",
      cloneImage: "https://i.ibb.co/bQYm5Lv/clone.png",
      cloneDescription:
        "Some description Some description Some description Some description",
      cloneStats: [{ stat1: "30" }, { stat2: "22" }, { stat3: "111" }],
    },
    {
      cloneId: 3,
      cloneName: "Armory #3",
      cloneImage: "https://i.ibb.co/bQYm5Lv/clone.png",
      cloneDescription:
        "Some description Some description Some description Some description",
      cloneStats: [{ stat1: "30" }, { stat2: "22" }, { stat3: "111" }],
    },
    {
      cloneId: 4,
      cloneName: "Armory #4",
      cloneImage: "https://i.ibb.co/bQYm5Lv/clone.png",
      cloneDescription:
        "Some description Some description Some description Some description",
      cloneStats: [{ stat1: "30" }, { stat2: "22" }, { stat3: "111" }],
    },
    {
      cloneId: 5,
      cloneName: "Armory #5",
      cloneImage: "https://i.ibb.co/bQYm5Lv/clone.png",
      cloneDescription:
        "Some description Some description Some description Some description",
      cloneStats: [{ stat1: "30" }, { stat2: "22" }, { stat3: "111" }],
    },
    {
      cloneId: 6,
      cloneName: "Armory #6",
      cloneImage: "https://i.ibb.co/bQYm5Lv/clone.png",
      cloneDescription:
        "Some description Some description Some description Some description",
      cloneStats: [{ stat1: "30" }, { stat2: "22" }, { stat3: "111" }],
    },
    {
      cloneId: 7,
      cloneName: "Armory #7",
      cloneImage: "https://i.ibb.co/bQYm5Lv/clone.png",
      cloneDescription:
        "Some description Some description Some description Some description",
      cloneStats: [{ stat1: "30" }, { stat2: "22" }, { stat3: "111" }],
    },
  ];
  return (
    <div>
      <div className={"border-fallout border-2 rounded-xl "}>
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
      <div className={"flex mt-5 mb-5 justify-around"}>
        {tabsConfig.map((item) => (
          <div key={item.title}>
            <p className={"text-fallout uppercase text-center"}>{item.title}</p>
            <div
              onClick={() => setCurrentTab(item.title)}
              className={
                currentTab === item.title
                  ? "border-yellow-500 h-[70px] w-[70px] border-2  rounded-full bg-[#FDFC72] "
                  : "border-fallout h-[70px] w-[70px] border-2 rounded-full bg-[#834F2E] hover:bg-[#A5A447]"
              }
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};
