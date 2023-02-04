import "./inputform.css";

function InputForm(props) {
  return (
    <div class="input-box">
      <div className="box">
        {props.clicked === 1 ? (
          <div class="can">
            <form className="form">
              <select
                onChange={(e) => props.setResult(e.target.value)}
                className="drop-down"
              >
                <option>Select</option>
                <option>Win</option>
                <option>Loss</option>
              </select>
              <input
                type="number"
                placeholder="Probability of trade"
                className="mini-input"
                onInput={(e) => props.setPercentage(e.target.value)}
              />
              <textarea
                className="major-input"
                placeholder="Enter description - why was the trade taken"
                onInput={(e) => props.setText(e.target.value)}
              />
              <button onClick={(e) => props.display(e)} className="form-btn">
                Done
              </button>
            </form>
          </div>
        ) : (
          <button
            className="input-icon"
            onClick={() => {
              props.setClicked(1);
            }}
          >      
            +
          </button>
        )}
      </div>
    </div>
  );
}

export default InputForm;
