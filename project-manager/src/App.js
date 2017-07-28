import React, { Component } from 'react';
import Projects from './components/Projects';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects:[]
    }
  }

  componentWillMount(){
    this.setState({projects: [
      {
        title: 'Business Websites',
        category: 'Web Design'
      },
      {
        title: 'Social App',
        category: 'Mobile Development'
      },
      {
        title: 'Ecommerce Shopping Cart',
        category: 'Web Development'
      }
    ]})
  }

  render() {
    return (
      // We has only one element, it means there is not another div here
      // Put the data right in our states
      <div className="App">
        My App
        <Projects projects = {this.state.projects}/>
      </div>
    );
  }
}

export default App;
