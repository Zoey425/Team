import React, { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Cleanup function called");
    };
  }, []);

  console.log("Render function called");

  return <p>경과 시간: {count}초</p>;
}

function Practice07() {
  return <Timer />;
}

export default Practice07;

//clearInterval 설명: 위의 코드에서 Timer 컴포넌트의 useEffect 훅에는 return 함수가 정의되어 있습니다. 해당 함수는 컴포넌트가 언마운트되거나 업데이트되기 전에 실행되며, clearInterval을 호출하여 타이머를 정리합니다.
