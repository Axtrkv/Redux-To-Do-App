import { Link } from "react-router-dom";

export const ToDoList = () => {
  return (
    <nav className="navbar">
      <Link to="/">All</Link>
      <Link to="/active">Active</Link>
      <Link to="/completed">Completed</Link>
    </nav>
  );
};
