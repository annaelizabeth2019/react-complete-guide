import React from "react";
import classes from "./Person.css";

const person = props => {
  const rnd = Math.random();
  if (rnd > 0.7) {
    throw new Error("Something went wrong!");
  }
  return (
    <div onClick={props.click} className={classes.Person}>
      <p>
        I'm a Person! and I am {props.age} years old and my name is {props.name}
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
