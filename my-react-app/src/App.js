import React, { Component } from "react";
import "./App.css";
import Person from "./person/Person";
import { precompile } from "handlebars";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Sampada", age: 21 },
      { id: 2, name: "Ganesh", age: 20 },
      { id: 3, name: "Akash", age: 20 }
    ],
    showPerson: false
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice(); //slice() will return a new array
    const persons = [...this.state.persons]; // spread operator
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangeHandler = (event, id) => {
    // findIndex take function as input same as map and execute that function on
    // every item and return index
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

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
                key={person.id}
                name={person.name}
                age={person.age}
                typeNewName={event => this.nameChangeHandler(event, person.id)}
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
