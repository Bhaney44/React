import logo from './logo.svg';
import './App.css';

/// React State
import React from 'react';
// State is current value
// Default can be empty ""
// const [name, setName] = React.useState("")

// React Hook
// A hook is a function that works between components.
// A hook is a function that handles state updates.
// The Effect Hook lets you perform side effects in function components:

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
  const [color, setColor] = React.useState("")

  // Non-state
  //////////
  //function selectColor(radioColor){
    //console.log(radioColor)
    //document.getElementById('colorMessage').textContent = "Color is:"+radioColor;
  //}

  // state based
  function selectColor(radioColor){
    console.log(radioColor)
    setColor(radioColor);
  }

  
  return (
    <form>

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
          <input id="red" type="radio" name="colorselection" value="red" onClick={() =>selectColor("red")}/>
          Blue
          <input id="blue" type="radio" name="colorselection" value="blue" onClick={() =>selectColor("blue")}/>
        </div>

        <div>
          <p id="colorMessage"></p>
        </div>

        <div>
          {color}
        </div>

      </p>


    </div>
    </form>

  )
}

// React functions must return a React component
function App() {
  return (
    <LoginPage />
  )

}

export default App;

// If statements
//if (color==="red") {
	//console.log("Brian chose red.")
//}

//if (color==="red") {
	//console.log("Brian chose red.")
//} else if (color===="blue"){
  //console.log("Brian chose blue.")
//}

/// three === is a comparison
