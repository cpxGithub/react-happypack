import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
  componentDidMount() {
    axios.get('/net/schooladmin/school-class/find-all-grade-class-list').then(res => {
      console.log(11, res)
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="ttt">hah</div>
      </div>
    );
  }
}

export default App;
