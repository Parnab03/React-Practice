import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
const TodoItems = ({ todoItems, onDeleteClick }) => {
    return (
        <div className={styles.itemsContainer}>
            {todoItems.map((item) => (
                <TodoItem
                    todoDate={item.todoDate}
                    todoName={item.todoName}
                    onDeleteClick={onDeleteClick} ></TodoItem>
            ))} 
        </div>
    );
};
export default TodoItems;
