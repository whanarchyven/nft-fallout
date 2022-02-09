import { ReactNode, useState } from "react";

export const Tabs = () => {
  const tabsConfig = [{ title: "Weapons" }, { title: "Heroes" }];
  const [currentTab, setCurrentTab] = useState("Weapons");
  return (
    <div>
      <div className={"flex mb-5 justify-between"}>
        {tabsConfig.map((item) => (
          <p
            key={item.title}
            onClick={() => setCurrentTab(item.title)}
            className={
              currentTab === item.title
                ? "text-green-500 hover:text-green-600 p-3"
                : "text-red-500 hover:text-red-700 p-3"
            }
          >
            {item.title}
          </p>
        ))}
      </div>
      <div>
        {currentTab === "Weapons" && <div></div>}
        {currentTab === "Heroes" && <div>Heroes</div>}
      </div>
    </div>
  );
};
