import InputReducer from './page/InputReducer';
import TodoListReducer from './page/TodoListReducer';
import LoginReducer from './page/LoginReducer';

function App() {
  return (
    <div>
      <InputReducer />
      <hr />
      <TodoListReducer />
      <hr />
      <LoginReducer />
    </div>
  );
}

export default App;
