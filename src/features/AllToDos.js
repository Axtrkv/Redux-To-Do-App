import { useSelector, useDispatch } from "react-redux";
import { removeToDo, checkToDo } from "./TodosSlice";
import { Link } from "react-router-dom";
import TodoItem from "./ToDoItem";

export const All = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleRemoveTodo = (todoID) => {
    dispatch(removeToDo(todoID));
  };

  const handleCheckToDo = (todoID) => {
    dispatch(checkToDo(todoID));
  };

  return (
    <div className="todolist">
      <nav className="navbar">
        <Link to="/">All</Link>
        <Link to="/active">Active</Link>
        <Link to="/completed">Completed</Link>
      </nav>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onCheck={handleCheckToDo}
            onRemove={handleRemoveTodo}
          />
        ))}
      </ul>
    </div>
  );
};
