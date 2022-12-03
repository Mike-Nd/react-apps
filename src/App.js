import "./App.css";
import Task from "./components/task";
import React, { useState } from "react";


function App() {
  const [task, setTask] = useState('');
  const [list, setList] = useState([]);


  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo : todo
    }
    setList([...list, newTodo]);

    setTask("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header-title">Today's task.</h1>

        <div className="tasks">
          <Task text={"Task 1"} />
        </div>
      </header>

      <div className="App-footer">
        <input
          className="input-box"
          placeholder="Write a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button
          className="input-icon"
          onClick={()=> addTodo(task) }>
          +
        </button>
      </div>
    </div>
  );
}

export default App;
