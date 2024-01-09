import { ToDoTools } from "../features/ToDoTools";

export default function LeftColumn () {
    return (
        <div className="leftColumn">
            <header className="lc_header">Add new ToDo</header>
            <ToDoTools/>
        </div>
    )
}