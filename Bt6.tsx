import React, { Component } from 'react'
import Bt6Child from './Bt6Child'
let users =[
    {
        id:1,
        name:"Duy1",
        address:"Khu1",
        email:"ai@gmail.com"
    },
    {
        id:2,
        name:"Duy1",
        address:"Khu1",
        email:"ai@gmail.com"
    },
    {
        id:3,
        name:"Duy1",
        address:"Khu1",
        email:"ai@gmail.com"
    },
]
export default class Bt6 extends Component {
  render() {
    return (
      <div>
        <h4>Bai 6</h4>
        <Bt6Child users={users}></Bt6Child>
      </div>
    )
  }
}
