import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header.js';
import AnimalList from './AnimalList.js';
import About from './About.js';
import './App.css';

// import DropdownTest from './DropdownTest.js'

class App extends Component {
  render() {
    return (
      <div className="App">

        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={AnimalList} />
            <Route exact path="/about" component={About} />
          </div>
        </BrowserRouter>

      {/* <DropdownTest /> */}
      </div>
    );
  }
}

export default App;