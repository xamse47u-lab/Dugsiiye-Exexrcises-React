import { useContext } from "react";
import TodoContext from "./TodoContext";
import styles from "./TodoItem.module.css";

const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);

  const handleToggle = () => {
    dispatch({
      type: "toggle",
      payload: todo.id,
    });
  };

  const handleDelete = () => {
    dispatch({
      type: "delete",
      payload: todo.id,
    });
  };

  return (
    <li className={styles.item}>
      <label className={styles.todoContent}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
          className={styles.checkbox}
        />

        <span className={todo.completed ? styles.completed : styles.text}>
          {todo.text}
        </span>
      </label>

      <button className={styles.deleteBtn} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
