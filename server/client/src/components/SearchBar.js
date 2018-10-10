import React, { Component } from 'react';
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { fetchAnimals } from '../actions/index.js'

import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      defaultOption: '',
      currentPage: 1
    }

    this.options = {
      priceSorting: [
        {value: "lowest", label: 'Price: Low to High'},
        {value: "highest", label: 'Price: High to Low'},
      ]
    };

  }

  updateState(key, value){
    //a little hacky...
    let property = {};//currentPage: 1};
    property[key] = value;

    this.setState(property, () => this.fetchData())
  }

  fetchData() {
    let filter = {};

    if(this.state.category)
      filter.category = this.state.category.value
    if(this.state.price)
      filter.price = this.state.price.value
    if(this.state.search)
      filter.name = this.state.search
    if(this.state.currentPage)
      filter.page = this.state.currentPage;

    this.props.fetchAnimals(filter);
  }

  componentDidMount() {
    this.fetchData();
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

    return (
      <div>
        <div>
          <div className="search-bar-filter-container">
            search:
            <input onChange={event => this.updateState('search', event.target.value)} type="text"/>
          </div>
          <div className="search-bar-filter-container">
          filter by category:
          <Dropdown options={this.props.categories}
                    onChange={event => this.updateState('category', event)}
                    value={this.state.category} 
                    placeholder="Select a breed" />
          </div>
          
        </div>
        <div>
          {this.props.children}
        </div>
        <div>
          page:
          {
            pages
          }
        </div>
      </div>
      
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  let {categories, currentPage, animals} = state;
  return {
    categories,
    currentPage
    // pages:animals.pages
  };
}
 function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchAnimals}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);