import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import loadScriptAsync from './loadScriptAsync';

class App extends Component {
  componentDidMount() {
    loadScriptAsync('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js', 'bootstraper', 3000)
      .then((data) => {
        console.log('successs')
        console.log(data)
      })
      .catch((error) => {
        console.log('error')
        console.log(error)
      });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
