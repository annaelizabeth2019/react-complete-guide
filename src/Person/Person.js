import React from "react";
import "./Person.css";
import Radium from "radium";

const person = props => {
  const style = {
    "@media (min-width: 500px)": {
      width: "450px"
    }
  };

  return (
    <div onClick={props.click} className="Person" style={style}>
      <p>
        I'm a Person! and I am {props.age} years old and my name is {props.name}
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
  return;
};

export default Radium(person);
