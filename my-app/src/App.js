import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <div className = "myPost">
       <img className = "logo" src = "https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png" />
       <h2>Company Name Goes Here</h2>
       <p>Your post will show up right here.</p>
       <p>Looks nice huh? #FirstComponent</p>
       <img className = "main-image" src = 'https://images.unsplash.com/photo-1486570318579-054c95b01160?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cbaf8a47436e2c6a07a640e42a3f74f7&auto=format&fit=crop&w=890&q=80'/>
       </div>
      </div>
    );
  }
}

export default App;
