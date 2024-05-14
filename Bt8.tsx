import React, { Component } from 'react'
import Bt8Child from './Bt8Child'
const products =[
    {
      id:1,
      name:"Sp1",
      price:1000,
      quantity:1
  
    },
    {
      id:2,
      name:"So2",
      price:2000,
      quantity:2
  
    },
    {
        id:3,
        name:"So3",
        price:3000,
        quantity:3
    
      },
  ]
export default class Bt8 extends Component {
  render() {
    return (
      <div>
        <Bt8Child listProduct={products}></Bt8Child>
      </div>
    )
  }
}
