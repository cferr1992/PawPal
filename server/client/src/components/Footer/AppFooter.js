import React, { Component } from 'react'
import { Footer } from 'react-materialize'

import './AppFooter.css'
import LogoWhite from '../../pictures/LogoWhite.png'

//Header component to be displayed on every page

class AppFooter extends Component {
    render () {
        return (
        <Footer
          copyrights="©2018 PawPal.com"
          moreLinks={<div>

            <a href="http://www.facebook.com" className="waves-effect waves-light btn-floating social facebook">
              <i className="fa fa-facebook" /></a>
            <a href="http://www.twitter.com" className="waves-effect waves-light btn-floating social twitter">
              <i className="fa fa-twitter" /></a>
            <a href="http://www.youtube.com" className="waves-effect waves-light btn-floating social youtube">
              <i className="fa fa-youtube" /></a>
          </div>
          }
          links={
            <ul>
              <li><p>Want a furry friend of your own? Check out these sites:</p></li>
              <li><a className="grey-text text-lighten-3" href="https://www.petfinder.com/">Pet Finder</a></li>
              <li><a className="grey-text text-lighten-3" href="http://aspca.org">ASPCA</a></li>
              <li><a className="grey-text text-lighten-3" href="http://adoptapet.com">Adopt-a-pet</a></li>
              <li><a className="grey-text text-lighten-3" href="http://hua.org/">Hearts United for Animals</a></li>
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
