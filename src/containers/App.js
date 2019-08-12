import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/WithClass";
import AuthContext from "../context/auth-context";
// import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] contstructor");
  }
  state = {
    persons: [
      { name: "Anna", age: 30, id: 1 },
      { name: "Bernie", age: 82, id: 2 },
      { name: "Tompkins", age: 2, id: 3 }
    ],
    showPersons: false,
    otherState: "some other value",
    changeCounter: 0
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    return this.setState({ persons: persons });
  };

  componentDidMount() {
    console.log("componentdidmount");
  }

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
    this.setState(prevState => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  render() {
    console.log("App.js render");
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
      );

      style.backgroundColor = "red";
    }

    return (
      <div classes={classes.App}>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}
        >
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            persons={this.state.persons.length}
            clicked={this.togglePersonsHandler}
            login={this.loginHandler}
          />
          {persons}
        </AuthContext.Provider>
      </div>
    );
  }
}

export default withClass(App, classes.App);
