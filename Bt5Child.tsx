import React, { Component } from 'react'
interface Product {
  id :number,
  name :string,
  price:number,
  quantity:number
}
interface Props {
  products:Product[]
}
export default class Bt5Child extends Component<Props> {
  render() {
    const { products } =this.props
    return (
      <div>
        <h4>Bai 5</h4>
        <ul>
          {
          products.map((item,index)=>{
            return <li key={index}> Id : {item.id} , Name :{item.name} , Price : {item.price} , Quantity:{item.quantity}</li>
          })}
        </ul>
      </div>
    )
  }
}
