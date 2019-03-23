import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import People from './appComponent.js';
const people = [
  {
    name:"Sarah",
    last:"Doe"
  },
  {
    name:"Jose",
    last:"Doe"
  },
  {
    name:"Mike",
    last:"Doe"
  },
  {
    name:"Jar",
    last:"Doe"
  },
  {
    name:"Edith",
    last:"Doe"
  }
]

class App extends Component {
    constructor(props){
      super(props);
        this.state={
          term:""
        }
      this.searchHandler = this.searchHandler.bind(this);
    }

  searchHandler(event){
    this.setState({term:event.target.value})
  }
  render() {
    const {term}= this.state;
    return (
      <People people={people} term={term} searchHandler={this.searchHandler}/>
    );
  }
}

export default App;
