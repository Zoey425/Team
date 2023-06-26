import React from "react";

function TodoList(props) {
  console.log(props);
  const toDoList = props.toDoList
  return(
    <>
    <ul>
      {toDoList.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
    </>
  )
}

function Practice05() {


  const secondToDos = [
    {id:1, text:"할 일 목록11", location:"seoul", },
    {id:2, text:"할 일 목록22"},
    {id:3, text:"할 일 목록33"},
    {id:4, text:"할 일 목록44"},
  ];
  return <TodoList toDoList={secondToDos}/>;
}



export default Practice05; 