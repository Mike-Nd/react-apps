import "./strategy.css";

function Strategy(props) {
  return (
    <div className="task-wrapper">
      <div
        className="task-main">
        
        <button className="square"/>
        <p className="task-text">{props.text.description}</p>
      </div>

      <div
        className="circle"
        onClick={() => props.deleteTodo(props.id)}
      />
    </div>
  );
}

export default Strategy;
