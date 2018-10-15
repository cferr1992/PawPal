import React, {Component} from 'react'
import { Navbar, NavItem } from 'react-materialize'

import './Header.css'
import LogoWhite from '../../pictures/LogoWhite.png'

//Creates logo variable to display image properly
const Img = <img class="logo responsive-img" src={LogoWhite} alt="Logo"/>

//Header component to be displayed on every page
class Header extends Component {
    
    render() {
        return (
            <div>
                <Navbar brand={Img} right>
                    <div className="nav-items-right">
                        <NavItem onClick={() => console.log('test click')} 
                            className="search-bar-item">
                            <form>
                                <div class="input-field">
                                    <input id="search" type="search" required />
                                    <label class="label-icon" for="search">
                                        <i class="material-icons">search</i>
                                    </label>
                                    <i class="material-icons">close</i>
                                </div>
                            </form> 
                        </NavItem>
                        <NavItem href='/animals'>Animals</NavItem>
                        <NavItem href='/about'>About</NavItem>
                        <NavItem href='/signup'>Sign Up</NavItem>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Header;