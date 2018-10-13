import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './Header.js'
import AnimalList from './AnimalList.js'
import About from './About.js'
import Signup from './Signup.js'
import Landing from './Landing.js'
import MapTest from './MapTest.js'
import AnimalDetail from './AnimalDetail.js'
import './App.css'

// import DropdownTest from './DropdownTest.js'

class App extends Component {
  render() {
    return (
      <div className="App">

        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/animals" component={AnimalList} />
            <Route exact path="/about" component={About} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/map" component={MapTest} />
            <Route exact path="/animals/detail" component={AnimalDetail} />
          </div>
        </BrowserRouter>

      {/* <DropdownTest /> */}
      </div>
    );
  }
}

export default App;