import React, { Component } from 'react'
interface user{
  name:string,
  id:number,
  address:string,
  email:string
}
interface Props {
  users:user[]
}

export default class Bt6Child extends Component<Props> {
  render() {
    const { users }=this.props
    return (
      <div>
             {users.map((item,index) =>{
                return <li key={index}>Sản phẩm {item.name} id : {item.id} address :{item.address}</li>
            })}
      </div>
    )
  }
}
