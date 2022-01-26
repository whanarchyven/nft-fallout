import {useState} from "react";

interface propsTestComponent {
    someVar:string
}
export const TestComponent = (props:propsTestComponent)=>{
    const [counter,setCounter]=useState(5);
    return <div className={"flex justify-between items-center border border-gray-500 p-3"}>
        <p className={"p-3 text-sky-700 hover:text-sky-500"}>Test Compontent {props.someVar}</p>
        <p>счетчик: {counter}</p>
        <button className={"px-3 text-white py-1 rounded-sm bg-sky-900 hover:bg-sky-500"} onClick={()=>{setCounter(counter+1)}}>Увеличить</button>
    </div>
}