import React, { Component } from 'react'

import SearchBar from './SearchBar'
import SymbolList from './SymbolList'

import StockStore from '../stores/StockStore'
import StockActions from '../actions/StockActions'

export default class Home extends Component {
  constructor() {
    super();

    this.state = StockStore.getAll()
    this._onChange = this._onChange.bind(this)
  }

  componentWillMount() {
    StockStore.startListening(this._onChange)
  }

  componentDidMount() {
    StockStore.getAll()
  }

  componentWillUnmount() {
    StockStore.stopListening(this._onChange)
  }

  _onChange() {
    this.setState( StockStore.getAll() )
  }

  render() {
    const { symbols } = this.state;

    return (
      <div className="row">
        <SearchBar symbols={symbols}/>
        <SymbolList symbols={symbols}/>
      </div>
    )
  }
}
