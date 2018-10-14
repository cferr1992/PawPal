import React, {Component} from 'react'
import { Navbar, NavItem, Icon } from 'react-materialize'
import './Header.css'
import LogoWhite from '../../pictures/LogoWhite.png'

//Header component to be displayed on every page

const Img = <img className="logo "responsive-img src={LogoWhite} alt="Logo"/>

class Header extends Component {

    render() {
        return (
            <div>
                <Navbar brand={Img} right fixed={true}>
                    <div className="nav-items-right">
                        {/* <NavItem onClick={() => console.log('test')} className="drop-down-header">Dropdown</NavItem> */}
                        <NavItem onClick={() => console.log('test click')} 
                            className="search-bar-item">
                            <input className="search-bar-input" id="search" type="search"></input>
                            <Icon className="search-icon">search</Icon></NavItem>
                        {/* <NavItem href='get-started.html'><Icon>view_module</Icon></NavItem> */}
                        <NavItem href='/animals'>Animals</NavItem>
                        <NavItem href='/about'>About</NavItem>
                        <NavItem href='/signup'>Sign Up</NavItem>
                    </div>
                </Navbar>
                {/* <DropdownBreed /> */}
            </div>
        );
    }
}

export default Header;