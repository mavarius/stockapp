import React, { Component } from 'react'
import NavLink from './NavLink'

export default class SymbolList extends Component {
  constructor() {
    super()
  }

  render() {
    const { symbols } = this.props;
    return (
        <div className="row">
          {symbols ?
            <div className="symbolList">
              {symbols.map((symbol, i) => {
                return <NavLink key={i} to={`/SymbolDetails/${symbol.Symbol}`} className="btn stockBtn"><span className="resultName">{symbol.Name}</span><span className="resultSymbol">{symbol.Symbol}</span><span className="resultExchange">{symbol.Exchange}</span></NavLink>
              })}
            </div>
          : null }
        </div>
    )
  }
}
