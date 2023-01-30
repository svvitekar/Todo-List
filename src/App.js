import logo from "./logo.svg";

import React, { useState } from "react";
import "./App.css";
import TodoList from "./todoList";

function App() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  function itemEvents(event) {
    setInputList(event.target.value);
  }
  function listOfItems() {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  }
  function removeItem(id) {
    console.log("deleted");
    setItems((oldItems) => {
      return oldItems.filter((arrEl, index) => {
        return index !== id;
      });
    });
  }
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>Todo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add An Item"
            onChange={itemEvents}
            value={inputList}
          />
          <button onClick={listOfItems} className="btn">
            +
          </button>
          <ol>
            {/* <li>{inputList}</li> */}
            {items.map((itemvalue, index) => {
              return (
                <TodoList
                  key={index}
                  id={index}
                  text={itemvalue}
                  onselect={removeItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
