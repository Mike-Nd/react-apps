import "./App.css";
import Strategy from "./components/strategy";
import InputBox from "./components/inputbox";
import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [outcome, setOutcome] = useState("0");
  const [list, setList] = useState([]);

  //global variables
  let result = 0;
  let count = 0;
  let updatedList = list;

  //add new strategy
  const addItem = (e) => {
    //check for duplicates
    let input = e.target.value;
    if (value !== input) {
      setList([...list, value]);
    }

    //clear input box
    setValue("");
  };

  //delete strategy
  const deleteItem = (id) => {
    const newList = list.filter((item, index) => index !== id);

    //update list
    setList(newList);
  };

  //calculate outcome
  const calculate = (id) => {
    count += 1;
    console.log(count);

    updatedList = list.filter((item, index) => index !== id);
    console.log(id);
    console.log(updatedList);

    const n = list.length;
    result = Math.round((count + n) * 100);

    setOutcome(result);

    console.log(result);
    console.log(list);
  };

  const reset = () => {
    setOutcome("0");
  };

  return (
    <div className="App">
      <div className="Container">
        <div className="header">
          <h1 className="title">Streck</h1>

          <div class="block">
            <h2 className="outcome">{outcome}</h2>
            <h5 className="percent">%</h5>
          </div>
          <button className="reset" onClick={() => reset()}>
            reset
          </button>
          <InputBox addItem={addItem} value={value} setValue={setValue} />
          <div class="section">
            {list.length ? (
              list.map((item, index) => (
                <Strategy
                  calculate={calculate}
                  deleteItem={deleteItem}
                  id={index}
                  text={item}
                />
              ))
            ) : (
              <p className="display">No Strategy Found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

//don't forget the eventListeners ; onChange, onClick, onInput and so on as the allow you know when to react.
//also remember the map, filter, spread,splice and push function they give you more flexibility when dealing with arrays.
//the state is one of the most important as it allows you have multiple states in your code, props are just movable codes and hooks allow you to manupulate the state of your program.

export default App;
