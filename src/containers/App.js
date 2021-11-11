import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {

  state = {
    persons: [
      {id:'adasd' , name: 'Belema', age: 24},
      {id:'saa2', name: 'Stanley', age: 25},
      {id:'asd5' , name: 'Horse Power', age: 28},
      {id:'dfs3', name: 'Danilo', age: 30},
    ],
    showPersons: true
  }

  change_name = (event, id) => {

    const person = {...this.state.persons.find((p) => p.id===id)}
    const persons = [...this.state.persons]
    
    const personIdex = persons.findIndex(pr => pr.id===id)
    person.name = event.target.value
    persons[personIdex] = person

    this.setState({
      persons: persons
    })
 
  }

 togglePersons = () => {
    this.setState({showPersons: !this.state.showPersons})
  }

  delete_person = (index) => {
    let persons = [...this.state.persons]
    persons.splice(index, 1)
    this.setState({persons : persons})
  }


  render() {

    let persons = null
    
    if (this.state.showPersons) {
      persons = <Persons 
      items={this.state.persons}
      onClick={this.delete_person}
      onChange={this.change_name}
      /> 
    }
    
   
    return (
      <div className={classes.App}>
        <Cockpit 
          title={this.props.title}
          state={this.state}
          onClick={this.togglePersons}
        />
        {persons}
        <p>Hi there</p> 
      </div>
    );

  }
}

export default App;
