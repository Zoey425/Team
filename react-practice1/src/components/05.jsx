import React from "react";

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;

  if (isLoggedIn) {
    return <h1>환영합니다!</h1>;
  } else {
    return <h1>로그인이 필요합니다.</h1>;
  }
}

function Practice05() {
  return <Greeting isLoggedIn={false} />;
}

export default Practice05;
