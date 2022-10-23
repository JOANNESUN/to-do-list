import pink from "./pink.jpg";
import "./App.css";
import Todo from "./Todo";
import { useState } from "react";
import DateTime from "./DateTime";

function App() {
  return (
    <div className="App">
      <DateTime />
      <header className="App-header">
        <img src={pink} className="App-logo" alt="logo" />
      </header>
      <div className="container mx-auto px-10">
      <Todo />
      </div>
    </div>
  );
}

export default App;
