import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, { StyleRoot} from 'radium';


class App extends Component {

  state = {
    persons: [
      {id: 'qq', name: "Max", age: 28},
      {id: 'aa', name: "Bob", age: 32},
      {id: 'zz', name: "Anna", age: 22}
    ],
    otherState: 'some value',
    showList: false
  }


  nameChangedHandler = (event, id) => {
    const persons = [...this.state.persons];
    const person = persons.find(p => {return p.id === id});
    person.name = event.target.value;
   
    this.setState({
      persons: persons
    })
  }


  showPersons = () => {
    this.setState({
      showList: !this.state.showList
    })
  }

  resetPersons = () => {
    this.setState({
      persons: [
        {id: 'qq', name: "Max", age: 28},
        {id: 'aa', name: "Bob", age: 32},
        {id: 'zz', name: "Anna", age: 22}
      ],
      otherState: 'some value',
      showList: false
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];   
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    })
  }


  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid red',
      padding: '8px',
      cursor: 'pointer',
      margin: '10px',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    const style2 = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid red',
      padding: '8px',
      cursor: 'pointer',
      margin: '10px'
    }

    let persons = null;

    if (this.state.showList) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name = {person.name}
              age = {person.age}
              key={person.id}
              changed={() => this.nameChangedHandler(event, person.id)}
            />
          })}
        </div>
      );

      style.backgroundColor = 'red';

      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    
    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm React App</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button style={style} onClick={this.showPersons}>Show</button>
          <button style={style2} onClick={this.resetPersons}>Reset</button>
          { persons }
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
