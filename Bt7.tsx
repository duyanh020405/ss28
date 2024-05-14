import React, { Component } from 'react'
import Bt7Child from './Bt7Child'
let list=[
    {
        id:1,
        title:"string",
        content:"Kinh di",
        author:"Duy"

    },
    {
        id:2,
        title:"string2",
        content:"Kinh di2",
        author:"Duy2"

    },
    {
        id:3,
        title:"string3",
        content:"Kinh di3",
        author:"Duy3"

    },
    

]
export default class Bt7 extends Component {
  render() {
    return (
      <div>
        <Bt7Child listPost={list}></Bt7Child>
      </div>
    )
  }
}
