import "./strategy.css";

function Strategy(props) {
  return (
    <div className="task-wrapper">
      <div className="task-main">
        <p className="result">{props.result}</p>
        <button className="square" onClick={() => props.deleteItem(props.id)}>
          X
        </button>
        <p className="task-text">{props.text}</p>
      </div>

      <div class="blocks">
        <h2 className="outcomes">{props.percentage}</h2>
        <h5 className="percents">%</h5>
      </div>
    </div>
  );
}

export default Strategy;
