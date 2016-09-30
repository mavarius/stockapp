import React, { Component } from 'react'

import StockActions from '../actions/StockActions'
import StockStore from '../stores/StockStore'

import NavLink from './NavLink'

import numeral from 'numeral'

export default class SymbolDetails extends Component {
  constructor() {
    super();

    this.state = StockStore.getAll()
    this._onChange = this._onChange.bind(this)
  }

  componentWillMount() {
    StockStore.startListening(this._onChange)
  }

  componentDidMount() {
    StockActions.fetchDetails(this.props.params.symbol)
    StockStore.getAll()
  }

  componentWillUnmount() {
    StockStore.stopListening(this._onChange)
  }

  _onChange() {
    this.setState( StockStore.getAll() )
  }

  render() {
    console.log('state: ', this.state);
    const { details } = this.state;

    return (
      <div className="row detailsPage">
        <NavLink className='btn navBtn' to="/" onlyActiveOnIndex>back to search</NavLink>

        {details ?
          <div className="details">
            <h1 className='dataName'>{details.Name}</h1>
            <h4 className='dataSymbol'>{details.Symbol}</h4>
            <h1 className='dataLastPrice'>{details.LastPrice}</h1>
            <h2 className='dataChange'>{numeral(details.Change).format('0.00')} ({numeral(details.ChangePercent/100).format('0.00%')})</h2>
            <span></span>
          </div>
        : <span className="loadingMessage">fetching latest financial data...</span>}
      </div>
    )
  }
}

// http://dev.markitondemand.com/MODApis/Api/v2/Lookup/jsonp?input=NFLX
// numeral().format('')
