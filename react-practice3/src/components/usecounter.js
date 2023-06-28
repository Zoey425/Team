import React from 'react';
import useCounter from '../hooks/counterHook';

function UseCount() {
  const { count, increment } = useCounter(0);

  return (
    <div>
      <p>카운트 : {count}</p>
      <button onClick={increment}>증가</button>
    </div>
  );
}
export default UseCount;
