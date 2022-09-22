import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";


function Home() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link to={`/App1`}><button id='button1'>App1</button></Link>
          <Link to={`/App2`}><button id='button2'>App2</button></Link>
        </header>
      </div>
    );
  }

export default Home;
