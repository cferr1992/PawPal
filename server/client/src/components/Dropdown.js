import React from 'react';
import { fetchAnimals } from '../actions'

import './Dropdown.css';

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
    console.log(fetchAnimals());
  }

  render() {
    return (
      <div  className="dropdown" style = {{background:"red",width:"200px"}} >
        <div className="button" onClick={this.showDropdownMenu}> My Setting </div>
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

export default Dropdown;