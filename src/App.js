import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <Person name="Anna" age="30" />
        <Person name="Clyde" age="82">Hobbies: fishing</Person>
        <Person name="Bob" age="2" />
      </div>
    );
  }
}

export default App;