import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import Radium, { StyleRoot } from "radium";

class App extends Component {
  state = {
    persons: [
      { name: "Anna", age: 30, id: 1 },
      { name: "Bernie", age: 82, id: 2 },
      { name: "Tompkins", age: 2, id: 3 }
    ],
    showPersons: false
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    return this.setState({ persons: persons });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    console.log(id);
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    console.log(personIndex);
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                changed={event => this.nameChangeHandler(event, person.id)}
                click={() => this.deletePersonHandler(index)}
              />
            );
          })}
        </div>
      );

      style.backgroundColor = "red";
      style[":hover"] = {
        color: "black",
        backgroundColor: "pink"
      };
    }

    let classes = [];
    if (this.state.persons.length <= 2) classes.push("red");
    if (this.state.persons.length <= 1) classes.push("bold");

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi I'm a React App</h1>
          <p className={classes.join(" ")}>This is really working!</p>
          <button onClick={() => this.togglePersonsHandler()} style={style}>
            Toggle Names!
          </button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
