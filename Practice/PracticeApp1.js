import logo from './logo.svg';
import './App.css';

// React Component
// Components are essentially any reusable code that displays an interface to the screen
// button, Page, or a table, etc.

function LoginButton() {
  const logInUser = () => {
    console.log("Logging in...")
    document.getElementById('message').textContent += "Logging in...";
  }

  return (
    <button onClick={logInUser}>Login</button>
  )
}

// variable that holds a reference to a function
const LoginPage = () => {
  return (
    <div>
      <div>
        <h1>Login</h1>
      </div>

      <div>
            Name:
            <input type="text" name="name" />
      </div>
      
      <p id="message">
      </p>

      <div>
        <LoginButton />
      </div>
    </div>
  )
}

// React functions must return a React component
function App() {
  return (
    <LoginPage />
  )

  /*
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
  */
}

export default App;
