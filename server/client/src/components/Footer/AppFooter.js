import React, { Component } from 'react'
import { Footer } from 'react-materialize'

import './AppFooter.css'
import LogoWhite from '../../pictures/LogoWhite.png'

//Header component to be displayed on every page

const Img = <img className="logo "responsive-img src={LogoWhite} alt="Logo"/>


class AppFooter extends Component {
    render () {
        return (
        <Footer
          moreLinks={<div>

            <a class="waves-effect waves-light btn-floating social facebook">
<i class="fa fa-facebook"></i> Sign in with Google</a>
<a class="waves-effect waves-light btn-floating social twitter">
<i class="fa fa-twitter"></i> Sign in with Google</a>
<a class="waves-effect waves-light btn-floating social youtube">
<i class="fa fa-youtube"></i> Sign in with Google</a>
          </div>
          }
          links={
            <ul>
              <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
            </ul>
          }
          className='example'
        >
            <img src={LogoWhite} alt="PawPal" />
            <p className="grey-text text-lighten-4">Paws. People. Pals.</p>
        </Footer>
        )
    }
}
export default AppFooter;
