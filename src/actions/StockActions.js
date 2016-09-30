import API from '../API'
import AppDispatcher from '../AppDispatcher'

const StockActions = {
  fetchSymbol(symbol) {
    API.fetchSymbol(symbol);
  },

  fetchDetails(symbol) {
    API.fetchDetails(symbol);
  },

  clearSearch() {
    AppDispatcher.dispatch({
      type: 'CLEAR_SEARCH'
    })
  }
}

export default StockActions;
