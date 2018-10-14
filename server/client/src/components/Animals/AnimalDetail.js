import React, { Component } from 'react'
import { connect } from "react-redux"
import { fetchAnimalById } from '../../actions'
import { bindActionCreators } from "redux"
import MapTest from '../MapTest'

class AnimalDetail extends Component {

componentDidMount() {
    fetchAnimalById();
}

    render () {
console.log(this.props.details);

        return (
            <div>
                <MapTest />
            </div>
        )
    }
}

function mapStateToProps(state) {
    let details = state.details;
    return {details}
  }
  
  
   function mapDispatchToProps(dispatch) {
      return bindActionCreators({fetchAnimalById}, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(AnimalDetail);