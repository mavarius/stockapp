import React, { Component } from 'react'

import StockActions from '../actions/StockActions'

import jsonp from 'jsonp'

export default class SearchBar extends Component {
  constructor () {
    super()
    this.handleSearch = this.handleSearch.bind(this);
    this.clearSearchBar = this.clearSearchBar.bind(this);
  }

  clearSearchBar(e) {
    const { symbolSearch } = this.refs;

    symbolSearch.value = ''
  }

  handleSearch(e) {
    e.preventDefault()
    const { symbolSearch } = this.refs;

    let newSymbol = symbolSearch.value;

    StockActions.fetchSymbol(newSymbol);
  }

  render( ) {
    return (
      <div className="row searchBlock">
        <form onSubmit={this.handleSearch}>
          <input onFocus={this.clearSearchBar} type="text" className="searchBar" ref="symbolSearch" placeholder="enter company name or symbol"/>
          <button className="btn searchBtn">find symbol</button>
        </form>
      </div>
    )
  }
}
