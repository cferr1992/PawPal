import React from 'react';
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { fetchAnimals } from '../actions'

import './Dropdown.css';

//Creates dropdown bar to search for dogs by breed

class Dropdown extends React.Component {
  constructor(){
    super();

    this.state = {
       displayMenu: false,
    };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });
  }

  componentDidMount() {
    this.props.fetchAnimals();
  }

  render() {
    return (
      <div  className="dropdown" style = {{background:"red",width:"200px"}} >
        <div className="button" onClick={this.showDropdownMenu}> Select a breed </div>
          { this.state.displayMenu ? (
            <ul>
              <li><a className="active" href="#Beagle">Beagle</a></li>
              <li><a href="#Boxer">Boxer</a></li>
              <li><a href="#Bulldog">Bulldog</a></li>
            </ul>
        ):
        (
          null
        )}
       </div>
    );
  }
}


 function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchAnimals}, dispatch);
}

export default connect(null, mapDispatchToProps)(Dropdown);