import "./App.css";
import Strategy from "./components/strategy";
import InputForm from "./components/inputform";
import React, { useState } from "react";

function App() {
  const [clicked, setClicked] = useState();
  const [list, setList] = useState([]);
  const [result, setResult] = useState("");
  const [percentage, setPercentage] = useState("");
  const [text, setText] = useState("");

  const display = (e) => {

    let value = e.target.value;
    console.log(value.text);

    list.push({
      result: result,
      percentage: percentage,
      text: text,
    });

    setList(list);

    setPercentage("");
    setResult("");
    setText("");

    //remove the form
    setClicked("");

    console.log(value);
  };

  //delete strategy
  const deleteItem = (id) => {
    const newList = list.filter((item, index) => index !== id);

    //update list
    setList(newList);
  };

  return (
    <div className="App" >
      <div className="Container">
        <div className="header">
          <h1 className="title">Tradal</h1>

          <InputForm
            clicked={clicked}
            setResult={setResult}
            setPercentage={setPercentage}
            setText={setText}
            display={display}
            setClicked={setClicked}
          />
          <div class="section">
            {list.length ? (
              list.map((item, index) => (
                <Strategy
                  percentage={item.percentage}
                  result={item.result}
                  deleteItem={deleteItem}
                  id={index}
                  text={item.text}
                  clicked={clicked}
                  setClicked={setClicked}
                />
              ))
            ) : (
              <p className="display">No Enteries Found.</p>
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
