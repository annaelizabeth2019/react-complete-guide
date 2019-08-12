import React, { PureComponent } from "react";
import classes from "./Person.css";
import withClass from "../../../hoc/WithClass";
import PropTypes from "prop-types";

class Person extends PureComponent {
  render() {
    console.log("App.js person");
    return (
      <div
      // onClick={this.props.click}
      // className={classes.Person}
      >
        <p>
          I'm a Person! and I am {this.props.age} years old and my name is{" "}
          {this.props.name}
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
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
