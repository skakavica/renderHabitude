import React from "react";
import "./style.css";
import ReactDOM from 'react-dom';


import Other from "./Other";

//App.js is able to render a default function within a div on index.html. My conslucsion is that the 'render' function or the 'ReactDom' function from react.js on the library posseses a constant that has a value of the 'index.html' directory
ReactDOM.render(< Other/>, document.getElementById('root2'))
function Welcome (probs){
  return <h1> Welcome, {probs.name}</h1>;
}

function clickHandler() {
  window.alert("Hello from React");

}

export default function Apps() {
  
  return (
   
    <div id="main">
      <Welcome name="Sarah"/>
      <Welcome name="Cahal"/>
      <Welcome name="Edite"/>
      <Welcome name="Edite"/>
      <h1 style={{color:"green"}}> Some Text </h1>
      <button onClick={clickHandler}>
      Show Text
      </button>
    </div>
  );

}
