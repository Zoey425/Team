import React from "react";

function TodoList(props) {
  console.log(props);
  const todos = props.todos;

  return (
    <ul>
      {todos.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}

function Practice06() {
  const todos = [
    { id: 1, text: "할 일 1" },
    { id: 2, text: "할 일 2" },
    { id: 3, text: "할 일 3" },
  ];

  return <TodoList todos={todos} />;
}

export default Practice06;

// map은 JavaScript의 배열 메서드로, 배열의 각 요소에 대해 지정된 함수를 실행하고 그 결과를 새로운 배열로 반환합니다. map 메서드는 원본 배열을 변경하지 않고 새로운 배열을 생성하기 때문에 배열을 변환하거나 데이터를 가공하는 데 자주 사용됩니다.

// item은 map 메서드 내에서 사용되는 매개변수 이름입니다. map 메서드는 배열의 각 요소를 순회하면서 지정된 함수를 호출하는데, 이때 각 요소를 대표하는 값을 item으로 지정할 수 있습니다. item은 현재 순회 중인 배열 요소를 나타내며, 해당 요소의 속성을 참조하거나 조작하는 데 사용됩니다.

// 따라서 주어진 코드에서 todos.map((item) => ...)은 todos 배열의 각 요소에 대해 실행되는 map 메서드를 나타냅니다. item은 각 요소를 대표하는 변수로, key 속성을 통해 고유한 식별자를 설정하고 item.text를 출력하는 li 요소를 생성하는 코드입니다. 이를 통해 todos 배열의 각 요소를 순회하고 각 요소의 text 속성을 출력하는 리스트 아이템을 생성할 수 있습니다.
