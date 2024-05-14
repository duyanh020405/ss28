import React, { Component } from 'react'
interface infor {
  name:string
}
export default class Bt4_2 extends Component<infor,any> {
  constructor(props:infor){
    super(props)
    this.state ={
      name: "Con Hihi"
    }
  }
  render() {
    return (
      <div>
        <p>Name con :{this.state.name}</p>
      </div>
    )
  }
}
