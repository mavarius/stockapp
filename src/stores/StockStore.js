import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _symbols = null;

let _details = null;

class StockStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'RECEIVE_SYMBOLS':
          _symbols = action.payload.symbols
          this.emit('CHANGE')
          break;
        case 'RECEIVE_DETAILS':
          _details = action.payload.details
          this.emit('CHANGE')
          break;
      }
    })
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getAll() {
    return {
      symbols: _symbols,
      details: _details
    }
  }
}

export default new StockStore();
