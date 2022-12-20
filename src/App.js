import "./App.css";
import Task from "./components/task";
import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const addTodo = () => {
    //Add task
    list.push({ description: task });
    setList(list);

    //clear input box
    setTask("");
  };

  //delete tasks.
  const deleteTodo = (id) => {
    const newList = list.filter((listItem, i) => i != id);
    setList(newList);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="app-title">TASKIT</h1>
        <div>
          {list.length ? (
            list.map((item, index) =>
              <Task id={index} text={item} deleteTodo={deleteTodo} />)
          ) : (
            <p className="taskAbsense">No task avalaible.</p>
          )}
        </div>
      </header>

      <div className="App-footer">
        <input
          className="input-box"
          placeholder="Write a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button className="input-icon" onClick={() => addTodo(task)}>
          +
        </button>
      </div>
    </div>
  );
}

//don't forget the eventListeners ; onChange, onClick, onInput and so on as the allow you know when to react.
//also remember the map, filter, spread,splice and push function they give you more flexibility when dealing with arrays.
//the state is one of the most important as it allows you have multiple states in your code, props are just movable codes and hooks allow you to manupulate the state of your program.

export default App;
