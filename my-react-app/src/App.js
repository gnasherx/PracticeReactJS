import React, { Component } from "react";
import "./App.css";
import Person from "./person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Sampada", age: 21 },
      { name: "Ganesh", age: 20 },
      { name: "Akash", age: 20 }
    ],
    showPerson: false
  };

  // If assign function as value to switchNameHandler then
  // it is called as method (aka properties)
  switchNameHandler = newName => {
    // console.log("Was Clicked!");
    this.setState({
      persons: [
        { name: "Sampada", age: 21 },
        { name: newName, age: 20 },
        { name: "Akash", age: 20 }
      ]
    });
  };

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: "Sampada", age: 21 },
        { name: "Ganesh", age: 20 },
        { name: event.target.value, age: 20 }
      ]
    });
  };

  togglePersonHandler = () => {
    this.setState({
      showPerson: !this.state.showPerson
    });
  };

  render() {
    return (
      <div className="App">
        <h1>This is ReactJS</h1>
        <button
          onClick={this.togglePersonHandler} // In-efficient way using arrow function
        >
          Switch Name
        </button>
        {this.state.showPerson ? (
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
            />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, "gnasherx")} // bind is efficient way
            >
              I love my Computer
            </Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
              typeNewName={this.nameChangeHandler}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
