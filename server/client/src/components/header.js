import React, {Component} from 'react'
import { Navbar, NavItem, Icon } from 'react-materialize'
import './Header.css'
import DropdownBreed from './DropdownBreed.js'
import LogoWhite from './LogoWhite.png'

//Header component to be displayed on every page

const Img = <img className="logo" src={LogoWhite}/>

class Header extends Component {

    render() {
        return (
            <div>
                <Navbar brand={Img} right>
                    <NavItem href='get-started.html'><Icon>search</Icon></NavItem>
                    <NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
                    <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
                    <NavItem href='/animals'>Animals</NavItem>
                    <NavItem href='/signup'>Sign Up</NavItem>
                </Navbar>
                <DropdownBreed />
            </div>
        );
    }
}

export default Header;