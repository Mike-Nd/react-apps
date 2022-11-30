import './task.css';

function Task(props) {
    return (
        <div className="task-wrapper">
            <div className="task-main">
                <button className="square"></button>
                <p className="task-text">{props.text}</p>
            </div>

            <div className="circle"></div>
        </div>
    );
}

export default Task;


