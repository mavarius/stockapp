import $ from 'jquery';
import ServerActions from './actions/ServerActions'

import jsonp from 'jsonp'

const API = {
  fetchSymbol(symbol) {
    jsonp(`http://dev.markitondemand.com/MODApis/Api/v2/Lookup/jsonp?input=${symbol}`, (err, symbols) => {
      console.log('API fetchSymbol: ', err);
      // console.log('API DATA: ', symbols);
      ServerActions.receiveSymbol(symbols)
    })
  },

  fetchDetails(symbol) {
    jsonp(`http://dev.markitondemand.com/MODApis/Api/v2/Quote/jsonp?symbol=${symbol}`, (err, details) => {
      // console.log('API fetchDetails: ', err);
      // console.log('API DATA: ', details);
      ServerActions.receiveDetails(details)
    })
  }
}

export default API;
