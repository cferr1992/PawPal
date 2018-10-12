import React, {Component} from 'react'
import { Navbar, NavItem, Icon } from 'react-materialize'
import './Header.css'
import DropdownBreed from './DropdownBreed.js'
import NewLogoWhite from './NewLogoWhite.png'

//Header component to be displayed on every page

const Img = <img className="logo" src={NewLogoWhite}/>

class Header extends Component {

    render() {
        return (
            <div>
                <Navbar brand={Img} right fixed="true">
                    <NavItem href='get-started.html'><Icon>search</Icon></NavItem>
                    <NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
                    <NavItem href='/about'>About</NavItem>
                    <NavItem href='/animals'>Animals</NavItem>
                    <NavItem href='/signup'>Sign Up</NavItem>
                </Navbar>
                <DropdownBreed />
            </div>
        );
    }
}

export default Header;