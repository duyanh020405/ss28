import React, { Component } from 'react'
interface Product {
    id :number,
    name :string,
    price:number,
    quantity:number
  }
  interface Props {
    listProduct:Product[]
  }
export default class Bt8Child extends Component<Props> {
  render() {
    const { listProduct } =this.props
    return (
      <div>
        <h4>Bai 8</h4>
        {
          listProduct.map((item,index)=>{
            return <li key={index}> Id : {item.id} , Name :{item.name} , Price : {item.price} , Quantity:{item.quantity}</li>
          }) 
        }
      </div>
    )
  }
}
