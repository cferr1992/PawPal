import React, { Component } from 'react'
import { Footer } from 'react-materialize'

import './AppFooter.css'

class AppFooter extends Component {
    render () {
        return (
        <Footer copyrights="&copy 2015 Copyright Text"
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
            <h5 className="white-text">Footer Content</h5>
            <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
        </Footer>
        )
    }
}
export default AppFooter;
