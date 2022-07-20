import logo from './logo.svg';
import './App.css';

/// React State
import React from 'react';
// State is current value
// Default can be empty ""
// const [name, setName] = React.useState("")


// React Component
// Components are essentially any reusable code that displays an interface to the screen
// button, Page, or a table, etc.

function LoginButton() {
  const logInUser = () => {
    console.log("Logging in...")
    const firstNameValue = document.getElementById('name').value
    document.getElementById('message').textContent = firstNameValue+" is logging in...";
  }
  return (
    <button id='button' onClick={logInUser}>Login</button>
  )
}

// variable that holds a reference to a function
// tag/element comes first, then come attributes (optional)
// exp: <input id="name"/> 


// const firstNameValue = document.getElementById('name').checked

const LoginPage = () => {
  const [buttonClicks, setButtonClicks] = React.useState(0)

  return (
    <div>
      <div>
        <h1>Login</h1>
      </div>
      <div>
            Name:
            <input id="name" type="text"/>
      </div>
      <p id="message">
      </p>
      <div>
        <LoginButton />
      </div>
      <div>
        <p>Number of button clicks: {buttonClicks}</p>
        <button onClick={() => setButtonClicks(buttonClicks + 1)}>Increment</button>
      </div>

      <p>
        <div>
          Checkbox Example
        </div>
        <div>
          Red
          <input id="red1" type="checkbox"/>
          Blue
          <input id="blue1" type="checkbox"/>
        </div>
      </p>

      <p>
        <div>
          Radio Example
        </div>
        <div>
          Red
          <input id="red" type="radio"/>
          Blue
          <input id="blue" type="radio"/>
        </div>
      </p>

    </div>
  )
}

// React functions must return a React component
function App() {
  return (
    <LoginPage />
  )

}

export default App;
