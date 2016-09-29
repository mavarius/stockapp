import React from 'react'
import { render } from 'react-dom'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Layout from './components/Layout'
import About from './components/About'
import Welcome from './components/Welcome'

render(
  <Router history={browserHistory}>

    <Route path='/' component={Layout}>

      <IndexRoute component={Welcome}></IndexRoute>
      <Route path='/about' component={About}></Route>

    </Route>

  </Router>,
  document.getElementById('root')
);
