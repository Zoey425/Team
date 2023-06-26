import React, {useState, useEffect} from "react";

function Timer(){
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount+1)
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("clear function works!");
    };
  }, [])

    return <p>경과시간 : {count}</p>
 
}


function Practice06(){
  return <Timer />;
}


export default Practice06; 