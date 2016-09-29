import React, { Component } from 'react'

export default class Welcome extends Component {
  componentDidMount() {
    console.log("welcome did mount");
  }

  componentWillUnmount() {
    console.log("welcome will unmount");
  }

  render() {
    return (
        <h1 className='text-center'>Welcome</h1>
    )
  }
}
