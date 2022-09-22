import logo from './logo.svg';
import './App.css';
import Home from './Home.js'
import App1 from './App1.js'
import App2 from './App2.js'

import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";


// Router is a way to display different pages on a website.
// https://reactrouter.com/en/main/start/tutorial
// Install
// npm install react-router-dom 
// Buttons
// https://reactrouter.com/en/main/start/tutorial#client-side-routing

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/App1",
    element: <App1></App1>,
  },
  {
    path: "/App2",
    element: <App2></App2>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
