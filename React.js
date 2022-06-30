// JSX is a syntax extension for JavaScript. It was written to be used with React. 
// JSX code looks a lot like HTML.

const h1 = <h1>Hello world</h1>;

// Web browsers can’t read it.
// If a JavaScript file contains JSX code, then that file will have to be compiled. 
// That means that before the file reaches a web browser, a JSX compiler will translate any JSX into regular JavaScript.

const h1 = <p>Hello world</p>;

// JSX elements are treated as JavaScript expressions. 
// They can go anywhere that JavaScript expressions can go.

// A JSX element can be saved in a variable, passed to a function, stored in an object.
// Save a JSX element in a variable.
const navBar = <nav>I am a nav bar</nav>;

// Serveral elements stored in an object

const myTeam = {
    center: <li>Benzo Walli</li>,
    powerForward: <li>Rasha Loa</li>,
    smallForward: <li>Tayshaun Dasmoto</li>,
    shootingGuard: <li>Colmar Cumberbatch</li>,
    pointGuard: <li>Femi Billon</li>
  };

// Example
const myArticle = <article>Article</article>;

// A JSX attribute is written using HTML-like syntax: a name, followed by an equals sign, followed by a value.

my-attribute-name="my-attribute-value"
<a href='http://www.example.com'>Welcome to the Web</a>;
const title = <h1 id='title'>Introduction to React.js: Part I</h1>; 
const panda = <img src='images/panda.jpg' alt='panda' width='500px' height='500px' />;

// Example
const p1 = <p>foo</p>
const p2 = <p>bar</p>
const p1 = <p id="large">foo</p>;
const p2 = <p id="small">bar</p>;

// You can nest JSX elements inside of other JSX elements, just like in HTML.

<a href="https://www.example.com"><h1>Click me!</h1></a>

<a href="https://www.example.com">
  <h1>
    Click me!
  </h1>
</a>

// If a JSX expression takes up more than one line, then you must wrap the multi-line JSX expression in parentheses.

(
    <a href="https://www.example.com">
      <h1>
        Click me!
      </h1>
    </a>
  )

// Nested JSX expressions can be saved as variables or passed to functions.

const theExample = (
    <a href="https://www.example.com">
      <h1>
        Click me!
      </h1>
    </a>
  );

// Example

const myDiv = (<div>
    <h1>
      "Hello world."
    </h1>
  </div>);

