import React from "react";

const TodoItem = ({ todo, onCheck, onRemove }) => {
  const currentDate = new Date();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();

  return (
    <li className="todo">
      <div className="todoDate" placeholder="Added:">
        {day}.{month}
      </div>
      <div className="todoCheck">
        <button className="checkBtn" onClick={() => onCheck(todo.id)}>
          {todo.isDone ? "☑" : "◻"}
        </button>
      </div>
      <div className={todo.isDone ? "completedToDo" : "todoText"}>
        {todo.text}
      </div>
      <div className="todoRemove">
        <button className="removeBtn" onClick={() => onRemove(todo.id)}>
          ✖
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
