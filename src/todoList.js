import React from "react";

const todoList = (props) => {
  return (
    <>
      <li>
        <button
          className="btn2"
          onClick={() => {
            props.onselect(props.id);
          }}
        >
          x
        </button>
        {props.text}
      </li>
    </>
  );
};

export default todoList;
