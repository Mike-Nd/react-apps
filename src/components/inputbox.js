import "./inputbox.css";

function InputBox(props) {

  return (
    <div class=".input-box">
      <div className="box">
        <input
          className="input"
          placeholder="Enter strategy "
          value={props.value}
          onChange={(e) => props.setValue(e.target.value)}
        />
      
        <button className="input-icon" onClick={(e) => props.addItem(e)}>
          +
        </button>
      </div>
    </div>
  );
}

export default InputBox;