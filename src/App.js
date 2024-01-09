import React from "react";
import LeftColumn from "./components/leftColumn";
import SideText from "./components/sideText";
import { ToDoList } from "./components/ToDoList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Active } from "./features/ActiveToDos";
import { Completed } from "./features/CompletedToDos";
import { All } from "./features/AllToDos";

function App() {
  return (
    <Router>
      <div className="App">
        <LeftColumn />
        <ToDoList />
        <SideText />

        <Routes>
          <Route exact path="/" Component={All}></Route>
          <Route exact path="/active" Component={Active} />
          <Route exact path="/completed" Component={Completed} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
