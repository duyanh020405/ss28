import React, { Component } from 'react'
import Bt5Child from './Bt5Child'
const products =[
  {
    id:1,
    name:"So1",
    price:1000,
    quantity:1

  },
  {
    id:2,
    name:"So2",
    price:2000,
    quantity:2

  }
]
export default class Bt5 extends Component {
  render() {
    return (
      <div>
        <Bt5Child products={products}></Bt5Child>
      </div>
    )
  }
}
