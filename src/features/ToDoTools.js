import { useState } from "react";
import styles from "../CSS/app.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addToDo, removeAll } from "./TodosSlice";

export const ToDoTools = () => {
  const [title, setTitle] = useState("");

  let [todos] = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddToDo = () => {
    if (title.trim()) {
      dispatch(addToDo({ id: Date.now(), text: title, isDone: false }));
      setTitle("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddToDo();
    }
  };

  const handleClearTitle = () => {
    if (title) {
      setTitle("");
    }
  };

  const handleRemoveAll = () => {
    if (todos) {
      dispatch(removeAll((todos = [])));
    }
  };

  return (
    <div className={styles.tools}>
      <input
        className={styles.input}
        type="text"
        id="todoTitle"
        name="todoTitle"
        value={title}
        placeholder="Type..."
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <div className={styles.buttons}>
        <div className={styles.add_clear}>
          <button className={styles.addBtn} onClick={handleAddToDo}>
            Add
          </button>
          <button className={styles.clearBtn} onClick={handleClearTitle}>
            Clear
          </button>
        </div>
        <button className={styles.removeAllBtn} onClick={handleRemoveAll}>
          Remove all ToDos
        </button>
      </div>
    </div>
  );
};
