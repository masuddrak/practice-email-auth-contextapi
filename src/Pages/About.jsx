import { useContext, useEffect, useRef, useState } from "react";
import { myContext } from "../MyContextComponents/MyContextComponent";

import InputForword from "../components/InputForword";

const About = () => {
    const { name } = useContext(myContext)
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)
    const counRef = useRef(0)
    // console.log(count,"count1")
    // console.log(count2,"count2")
    const handelCount = () => {
        setCount(count + 1)
    }
    const handelCount2 = () => {
        setCount2(count2 + 1)
    }
    const handelRef = () => {
        counRef.current = counRef.current + 1
        alert(counRef.current)
    }

useEffect(()=>{
   
},[])
    return (
        <div>
            <h1>this is about section {name}</h1>
            <button onClick={handelCount} className="bg-green-600">count</button>
            <br></br>
            <br></br>
            <button onClick={handelRef} className="bg-green-600">ref</button>
            <br></br>
            <InputForword  type={"text"} placeholder={"my Name"}></InputForword>
            <br></br>
            <button onClick={handelCount2} className="bg-green-600">handelCount2</button>
        </div>
    );
};

export default About;