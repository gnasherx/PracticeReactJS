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

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice(); //slice() will return a new array
    const persons = [...this.state.persons]; // spread operator
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    this.setState({
      showPerson: !this.state.showPerson
    });
  };

  render() {
    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={this.deletePersonHandler.bind(index)}
                key={person.name}
                name={person.name}
                age={person.age}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>This is ReactJS</h1>
        <button
          onClick={this.togglePersonHandler} // In-efficient way using arrow function
        >
          Switch Name
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
