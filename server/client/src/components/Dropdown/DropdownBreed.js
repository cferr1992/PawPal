import React, { Component } from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { fetchAnimals, fetchByBreed } from '../../actions'
import { Dropdown, Button, NavItem, Pagination } from 'react-materialize'

import './Dropdown.css'

//Creates dropdown bar to search for dogs by breed

class DropdownBreed extends Component {
  constructor(){
    super();

    this.state = {
       displayMenu: false,
       currentPage: 1,
       selectedBreed: '',
    };

};

  updateState(key, value) {
  let property = {currentPage: 1};
  property[key] = value;

  this.setState(property, () => this.fetchData())
}

fetchData() {
  this.props.fetchAnimals(this.state.selectedBreed, this.state.currentPage);
}

  componentDidMount() {
    this.fetchData();
  }

getByBreed(breed) {
  this.props.fetchByBreed(breed);
}

  render() {

    return (
      <div>
      <div  className="dropdown">

      <Dropdown onChange={event => this.updateState('breed', event)} trigger={
        <Button>Select a breed</Button>
        }>
          <NavItem onClick={() => this.updateState('selectedBreed','Beagle')}>Beagle</NavItem>
          <NavItem onClick={() => this.updateState('selectedBreed','Boxer')}>Boxer</NavItem>
          <NavItem onClick={() => this.updateState('selectedBreed','Bulldog')}>Bulldog</NavItem>
          <NavItem onClick={() => this.updateState('selectedBreed','Corgi')}>Corgi</NavItem>
          <NavItem onClick={() => this.updateState('selectedBreed','Dachshund')}>Dachshund</NavItem>
          <NavItem onClick={() => this.updateState('selectedBreed','German Shepherd')}>German Shepherd</NavItem>
          <NavItem onClick={() => this.updateState('selectedBreed','Golden Retriever')}>Golden Retriever</NavItem>
          <NavItem onClick={() => this.updateState('selectedBreed','Husky')}>Husky</NavItem>
          <NavItem onClick={() => this.updateState('selectedBreed','Labrador Retriever')}>Labrador Retriever</NavItem>
          <NavItem onClick={() => this.updateState('selectedBreed','Poodle')}>Poodle</NavItem>
          <NavItem onClick={() => this.updateState('selectedBreed','Pug')}>Pug</NavItem>
          <NavItem onClick={() => this.updateState('selectedBreed','Rottweiler')}>Rottweiler</NavItem>
          <NavItem onClick={() => this.updateState('selectedBreed','Terrier')}>Terrier</NavItem>
      </Dropdown>

       </div>
      <div>
        {this.props.children}
      </div>
      <div>
      <Pagination onSelect={event => this.updateState('currentPage', event)} className="pagination" items={this.props.pages} activePage={1} maxButtons={5} />
      </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  let {breeds, currentPage, animal} = state;
  return {
    breeds,
    currentPage,
    pages:animal.pages
  };
}


 function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchAnimals, fetchByBreed}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DropdownBreed);