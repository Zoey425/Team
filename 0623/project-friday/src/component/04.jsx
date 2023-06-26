import React, { useState } from "react";


const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  //값을 실시간으로 바꿔주는 함수
  // setIsOn
  const handleClick = () => {
    console.log("버튼 누름");
    setIsOn(!isOn);
  }
  


  return (
    <button onClick={handleClick}>{isOn ? "켜짐" : "꺼짐"}</button>
  )
}

function Practice04() {
  return <Toggle />;
}



export default Practice04; 