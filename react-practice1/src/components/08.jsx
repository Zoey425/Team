import React from "react";

function Message(props) {
  const isError = props.isError;

  let className = isError ? "error" : "info";

  return <div className={className}>안녕하세요!</div>;
}

function Practice08() {
  return <Message isError={true} />;
}

export default Practice08;
