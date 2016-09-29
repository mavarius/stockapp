import React, { Component } from 'react'

import { Link } from 'react-router'

export default class Layout extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className='text-center'>Stock App</h1>

        <div className="row">
          <Link className='btn btn-danger' to='/'>
            Welcome
          </Link>
          <Link className='btn btn-danger' to='/about'>
            About
          </Link>
        </div>

        {this.props.children}

      </div>
    )
  }
}
