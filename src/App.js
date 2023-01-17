import "./App.css";
import Strategy from "./components/strategy";
import InputBox from "./components/inputbox";
import React, { useState } from "react";

function App() {
  const [outcome, setOutcome] = useState("");

  return (
    <div className="App">
      <div className="Container">
        <header className="header">
          <h1 className="title">Streck</h1>
          <Strategy />
        </header>

        <div className="input-box">
          <InputBox/>
        </div>
      </div>
    </div>
  );
}

//don't forget the eventListeners ; onChange, onClick, onInput and so on as the allow you know when to react.
//also remember the map, filter, spread,splice and push function they give you more flexibility when dealing with arrays.
//the state is one of the most important as it allows you have multiple states in your code, props are just movable codes and hooks allow you to manupulate the state of your program.

export default App;
