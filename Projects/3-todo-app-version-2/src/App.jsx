import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import "./App.css";

function App() {
    const todoItems = [
    {
        todoName: "BUY MILK",
        todoDate: "20/07/2023"
    },
    {
        todoName: "BUY BREAD",
        todoDate: "29/07/2023"
    },
    ];
    return (
        <center className="todo-container">
            <AppName></AppName>
            <AddTodo></AddTodo>
            <TodoItems todoItems={todoItems}></TodoItems>
            
        </center>
    );
}

export default App;
