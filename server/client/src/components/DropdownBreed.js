import React, { Component } from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { fetchAnimals } from '../actions'
import { Dropdown, Button, NavItem } from 'react-materialize'

import './Dropdown.css'

//Creates dropdown bar to search for dogs by breed

class DropdownBreed extends Component {
  constructor(){
    super();

    this.state = {
       displayMenu: false
    };

};

  componentDidMount() {
    this.props.fetchAnimals();
  }

  render() {
    return (
      <div  className="dropdown">

      <Dropdown trigger={
        <Button>Select a breed</Button>
        }>
          <NavItem>Beagle</NavItem>
          <NavItem>Boxer</NavItem>
          <NavItem>Bulldog</NavItem>
          <NavItem>Corgi</NavItem>
          <NavItem>Dachshund</NavItem>
          <NavItem>German Shepherd</NavItem>
          <NavItem>Golden Retriever</NavItem>
          <NavItem>Husky</NavItem>
          <NavItem>Labrador Retriever</NavItem>
          <NavItem>Poodle</NavItem>
          <NavItem>Pug</NavItem>
          <NavItem>Rottweiler</NavItem>
          <NavItem>Terrier</NavItem>
      </Dropdown>




        {/* <div className="button" onClick={this.showDropdownMenu}> Select a breed </div>
          { this.state.displayMenu ? (
            // <ul>
            //   <li><a className="active" href="#Beagle">Beagle</a></li>
            //   <li><a href="#Boxer">Boxer</a></li>
            //   <li><a href="#Bulldog">Bulldog</a></li>
            //   <li><a href="#Corgi">Corgi</a></li>
            //   <li><a href="#Dachshund">Dachshund</a></li>
            //   <li><a href="#German-Shepherd">German Shepherd</a></li>
            //   <li><a href="#Golden-Retriever">Golden Retriever</a></li>
            //   <li><a href="#Husky">Husky</a></li>
            //   <li><a href="#Labrador-Retriever">Labrador Retriever</a></li>
            //   <li><a href="#Poodle">Poodle</a></li>
            //   <li><a href="#Pug">Pug</a></li>
            //   <li><a href="#Rottweiler">Rottweiler</a></li>
            //   <li><a href="#Terrier">Terrier</a></li>
            // </ul>
        ):
        (
          null
        )} */}
       </div>
    );
  }
}


 function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchAnimals}, dispatch);
}

export default connect(null, mapDispatchToProps)(DropdownBreed);