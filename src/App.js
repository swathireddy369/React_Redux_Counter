
import './App.css';
import Bears from './components/Bears/Bears';
import Counter from './components/Counter';
import Movies from './components/Movies';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter />
        <Movies/> */}
        <Bears/>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        //git add
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
