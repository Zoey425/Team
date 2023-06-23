import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("입력한 이름: " + name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={handleChange} />
      <button type="submit">제출</button>
    </form>
  );
}

function Practice09() {
  return <Form />;
}

export default Practice09;
