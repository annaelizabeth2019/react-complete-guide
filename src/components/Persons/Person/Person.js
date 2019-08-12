import React, { Component } from "react";
import classes from "./Person.css";
import withClass from "../../../hoc/WithClass";
import PropTypes from "prop-types";
import AuthContext from "../../../context/auth-context";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    this.inputElementRef.current.focus();
  }

  render() {
    return (
      <div
      // onClick={this.props.click}
      // className={classes.Person}
      >
        <AuthContext.Consumer>
          {context =>
            context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>
          }
        </AuthContext.Consumer>
        <p>
          I'm a Person! and I am {this.props.age} years old and my name is{" "}
          {this.props.name}
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          // ref={inputEl => (this.inputElement = inputEl)}
          ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
