import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  </header>*/}
<>
<table className="table-design">
    <tbody>
      <tr>
        <td rowSpan={2}>
          <img src="bathroom.jpg" className="bed-image" />
        </td>
        <td>
          <img src="bathroom.jpg" className="image" />
        </td>
      </tr>
      <tr>
        <td>
          <img src="bathroom.jpg" className="image" />
        </td>
      </tr>
    </tbody>
  </table>
  <h4>Overview</h4>
  <ul>
    <li>2 beds</li>
    <li>1 private bath</li>
  </ul>
  <div>
    <p>
      <b>This place offers</b>
    </p>
    <ul>
      <li>tv</li>
      <li>wifi</li>
      <li>kitchen</li>
      <li>first aid</li>
      <li>transportation</li>
    </ul>
  </div>
</>
    </div>
  );
}

export default App;
