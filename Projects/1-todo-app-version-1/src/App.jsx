import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import Todoitem1 from "./Components/Todoitem1";
import Todoitem2 from "./Components/Todoitem2";
import './App.css';

function App() {

  return (
    <center class="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <Todoitem1></Todoitem1>
      <Todoitem2></Todoitem2>
    </center>
  );
}

export default App;