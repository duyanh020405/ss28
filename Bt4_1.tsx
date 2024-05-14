import React, { Component } from 'react'
import Bt4_2 from './Bt4_2'
interface infor {
  name:string
}
export default class Bt4_1 extends Component<infor,any> {
  constructor(props:infor){
    super(props)
    this.state ={
      name: "Cha Hihi"
    }
  }
  render() {
    return (
      <div>
        <h4>Bai 4</h4>
        <p>
        <p>Name cha :{this.state.name}</p>
       <Bt4_2 name={''}></Bt4_2>
        </p>
      </div>
    )

  }
}
