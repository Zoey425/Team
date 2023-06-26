import React from "react";

//props.name도 가능


//비구조화 할당.
function Greeting({name}) {
  return(
    <h1>안녕하세요, {name}</h1>
  )
}

function Practice03() {
  return(
    <Greeting name="홍길동" />
  )
}



export default Practice03; 