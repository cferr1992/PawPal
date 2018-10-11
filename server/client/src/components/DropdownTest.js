import React from 'react';
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { fetchAnimals } from '../actions'
import Dropdown from 'react-dropdown';

import './Dropdown.css';

class DropdownTest extends React.Component {
    constructor(){
        super();

        this.state = {
        defaultOption: '',
        currentPage: 1 
        };
    }

    updateState(key,value){
        let property = {};
        property[key] = value;

        this.setState(property, () => this.props.fetchAnimals())
    }
  
    componentDidMount() {
        this.props.fetchAnimals();
    }

    pageClickHandler(i) {
        if(i !== this.state.currentPage)
          this.updateState('currentPage', i);
    }

  render() {
    let pages = [];
    for(let i = 1; i < this.props.pages + 1; i++) {
      pages.push(
        <span className={i === this.state.currentPage ? "page selectedPage" : "page"}
              onClick={() => this.pageClickHandler(i)}
              key={i}>
          {i}
        </span>);
    }
    console.log(this.props.);

    return (
        <div  className="dropdown" style = {{background:"red",width:"200px"}} >
            <div className="dropdown-dropdown">
                <Dropdown options={this.props.breed}
                    onChange={event => this.updateState('breed', event)}
                    value={this.state.breed} 
                    placeholder="Select a breed" />
            </div>
            <div>{this.props.children}</div>
            <div>pages: {
                pages
            }
            </div>
        </div>
    );
  }
}


 function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchAnimals}, dispatch);
}

export default connect(null, mapDispatchToProps)(DropdownTest);