import React, { Component } from 'react'

import { get } from 'axios'

import jsonp from 'jsonp'

export default class About extends Component {
  componentDidMount() {
    console.log("about did mount");

    jsonp('http://dev.markitondemand.com/MODApis/Api/v2/Lookup/jsonp?input=NFLX', (err, data) => {
      console.log('err: ', err);
      console.log('data: ', data);
    })

    // get('http://dev.markitondemand.com/MODApis/Api/v2/Lookup/jsonp?input=NFLX&callback=myFunction')
    //   .then(resonse => {
    //     console.log('res: ', res);
    //   })
    //   .catch(err => {
    //     console.log('err: ', err);
    //   })

  }

  componentWillUnmount() {
    console.log("about will unmount");
  }

  render() {
    return (
        <h1 className='text-center'>About</h1>
    )
  }
}
