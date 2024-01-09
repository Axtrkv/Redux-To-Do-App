import { Link } from "react-router-dom";
import { removeToDo, checkToDo } from "./TodosSlice";
import { useSelector, useDispatch } from "react-redux";
import TodoItem from "./ToDoItem";

export const Active = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleRemoveTodo = (todoID) => {
    dispatch(removeToDo(todoID));
  };

  const handleCheckToDo = (todoID) => {
    dispatch(checkToDo(todoID));
  };

  const activeToDos = todos.filter((todo) => todo.isDone === false);

  return (
    <div className="todolist">
      <nav className="navbar">
        <Link to="/">All</Link>
        <Link to="/active">Active</Link>
        <Link to="/completed">Completed</Link>
      </nav>
      <ul>
        {activeToDos.map((todo) => (
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
