import './App.css';
import Task from './components/task';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header-title">Today's task.</h1>

        <div classname="tasks">
          <Task text={'Task 1'} />
          <Task text={'Task 2'} />
        </div>
      </header>

      <div className="App-footer">
      </div>
    </div>
  );
}

export default App;
