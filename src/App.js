import React, { useState } from "react";
import "./App.css";
import { Left, Middle, Right } from "./Components";

function App() {
  const [todoClick, setTodoClick] = useState(false);
  const [todoDetails, setTodoDetails] = useState({});
  const [key, setKey] = useState();

  return (
    <>
      <div className="position-relative">
        <div id="notification"></div>
      </div>
      <div className="bg-wrapper">
        <div className="app d-flex">
          <Left />
          <Middle setDetails={{ setTodoClick, setTodoDetails, setKey }} />
          <Right details={{ todoClick, todoDetails, key }} />
        </div>
      </div>
    </>
  );
}

export default App;
