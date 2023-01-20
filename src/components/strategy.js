import "./strategy.css";

function Strategy(props) {
  return (
    <div className="task-wrapper">
      <div className="task-main">
        <button className="square" onClick={() => props.deleteItem(props.id)}>
          X
        </button>{" "}
        <p className="task-text">{props.text}</p>
      </div>
    </div>
  );
}

export default Strategy;
