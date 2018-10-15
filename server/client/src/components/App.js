import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './Header/Header.js'
import AnimalList from './Animals/AnimalList.js'
import About from './About/About.js'
import Signup from './Signup/Signup.js'
import Landing from './Landing/Landing.js'
import AnimalDetail from './Animals/AnimalDetail.js'
import AppFooter from './Footer/AppFooter.js'
import MapView from './MapView/MapView.js'
import './App.css'

// import DropdownTest from './DropdownTest.js'
class App extends Component {

  render() {
    return (
      <div className="App">
        {/* Sets up the separate pages throughout the site */}
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/animals" component={AnimalList} />
            <Route exact path="/about" component={About} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/animals/detail/:animalid" component={AnimalDetail} />
            <Route exact path="/mapView" component={MapView} />
            <AppFooter />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;