import React, { Component } from 'react'
type infor ={
    id:number,
    name:string,
    date:string,
    address:string
}
export default class Bt2 extends Component<infor> {
    public state: infor
    constructor(props:infor){
        super(props)
        this.state={
            id:1,
            name:"Duy Anh",
            date:"02/04/2005",
            address:"Khu 2"
        }
    }
  render() {
    return (
      <div>
        <h4>Bai 2</h4>
        <p>ten :{this.state.name}</p>
        <p>id :{this.state.id}</p>
        <p>date :{this.state.date}</p>
        <p>address :{this.state.address}</p>
        
      </div>
    )
  }
}