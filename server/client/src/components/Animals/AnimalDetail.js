import React, { Component } from 'react'
import { connect } from "react-redux"
import { fetchAnimalById } from '../../actions'
import MapTest from '../MapTest'

class AnimalDetail extends Component {

componentDidMount() {
    fetchAnimalById();
}

    render () {
        return (
            <div>
                <MapTest />
            </div>
        )
    }
}

function mapStateToProps(state) {
    
  }
  
  
   function mapDispatchToProps(dispatch) {
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(AnimalDetail);