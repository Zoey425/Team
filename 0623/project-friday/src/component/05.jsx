import React from "react";

function TodoList(props) {
  console.log(props);
  const toDoList = props.toDoList
  return(
    <>
    <ul>
      {toDoList.map((item) => (
        <li>{item.text}</li>
      ))}
    </ul>
    </>
  )
}

function Practice05() {
  const toDos = [
    {id:1, text:"할 일 목록1"},
    {id:2, text:"할 일 목록2"},
    {id:3, text:"할 일 목록3"},
    {id:4, text:"할 일 목록4"},
    {id:5, text:"할 일 목록5"},
  ];

  const secondToDos = [
    {id:1, text:"할 일 목록11"},
    {id:2, text:"할 일 목록22"},
    {id:3, text:"할 일 목록33"},
    {id:4, text:"할 일 목록44"},
  ];
  return <TodoList toDoList={secondToDos}/>;
}



export default Practice05; 