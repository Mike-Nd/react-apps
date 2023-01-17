const [task, setTask] = useState("");
const [list, setList] = useState([]);

const addTodo = (e) => {
  //Add task
  let value = e.target.value;

  if (value !== task) {
    list.push({ description: task });
    setList(list);
  }

  //clear input box
  setTask("");
};

//delete tasks.
const deleteTodo = (id) => {
  const newList = list.filter((listItem, i) => i != id);
  setList(newList);
};

return (
  <div class="container">
    <h1 className="app-title">TASKIT</h1>

    <div className="App">
      <div className="App-footer">
        <input
          className="input-box"
          placeholder="Write a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="input-icon" onClick={(e) => addTodo(e)}>
          +
        </button>
      </div>

      <div className="App-header">
        <div>
          {list.length ? (
            list.map((item, index) => (
              <Task id={index} text={item} deleteTodo={deleteTodo} />
            ))
          ) : (
            <p className="taskAbsense">No task avalaible.</p>
          )}
        </div>
      </div>
    </div>
  </div>
);
