import React from 'react'
import { render } from 'react-dom'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Layout from './components/Layout'
import SymbolDetails from './components/SymbolDetails'
import Home from './components/Home'
import SearchBar from './components/SearchBar'

render(
  <Router history={browserHistory}>

    <Route path='/' component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path='/SymbolDetails/:symbol' component={SymbolDetails}></Route>
    </Route>

  </Router>,
  document.getElementById('root')
);
