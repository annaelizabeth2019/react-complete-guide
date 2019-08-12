import React, { Component } from "react";
import Person from "./Person/Person";
import AuthContext from "../../context/auth-context";

class Persons extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.persons !== this.props.persons;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("persons. get snap");
  }

  componentDidUpdate() {
    console.log("persons comp did up");
  }

  componentWillUnmount() {
    console.log("persons.js comp will unmount");
  }
  render() {
    console.log("Persons.js rendering");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          changed={event => this.props.changed(event, person.id)}
          click={() => this.props.clicked(index)}
        />
      );
    });
  }
}

export default Persons;
