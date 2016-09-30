import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  receiveSymbol(symbols) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_SYMBOLS',
      payload: { symbols }
    })
  },

  receiveDetails(details) {
    console.log('ServerActions: ', details);
    AppDispatcher.dispatch({
      type: 'RECEIVE_DETAILS',
      payload: { details }
    })
  }
}

export default ServerActions;
