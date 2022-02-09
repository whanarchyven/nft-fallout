import { ReactNode, useState } from "react";

interface propsTestComponent {
  someVar: string;
  children: ReactNode;
}
export const TestComponent = ({ someVar, children }: propsTestComponent) => {
  const vatname = [
    { name: "Vasya", age: 17 },
    { name: "Vika", age: 21 },
    { name: "Anton", age: 29 },
  ];
  const varias = useState(5);
  const counter = varias[0];
  const setCounter = varias[1];
  return (
    <div
      className={"flex justify-between items-center border border-gray-500 p-3"}
    >
      <p className={"p-3 text-sky-700 hover:text-sky-500"}>
        Test Compontent {someVar}
      </p>
      <p>счетчик: {counter}</p>
      {children}
      {vatname.map((item, i) => {
        return (
          <h1 key={i}>
            {item.name}, {item.age}
          </h1>
        );
      })}
      <button
        className={
          "px-3 text-white py-1 rounded-sm bg-sky-900 hover:bg-sky-500"
        }
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Увеличить
      </button>
    </div>
  );
};
