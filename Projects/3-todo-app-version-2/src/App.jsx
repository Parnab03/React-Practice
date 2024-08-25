import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import WelcomeMessage from "./Components/WelcomeMessage";
import "./App.css";
import { useState } from "react";

function App() {
    
    const [todoItems, setTodoItems] = useState([]);

    const handleNewItem = (itemName, itemDueDate) => {
        console.log(`New item added: ${itemName} Date: ${itemDueDate}`);
        const newTodoItems = [
            ...todoItems,
            { todoName: itemName, todoDate: itemDueDate },
        ];
        setTodoItems(newTodoItems);
    };

    const handleDeleteItem = (todoItemName) => {
        const newTodoItems = todoItems.filter(
            (item) => item.todoName !== todoItemName
        );
        setTodoItems(newTodoItems);
        console.log(`Deleted: ${todoItemName}`);
    }
    return (
        <center className="todo-container">
            <AppName></AppName>
            <AddTodo onNewItem={handleNewItem}></AddTodo>
            {todoItems.length === 0 && <WelcomeMessage />}
            <TodoItems
                todoItems={todoItems}
                onDeleteClick={handleDeleteItem}></TodoItems>
        </center>
    );
}

export default App;
