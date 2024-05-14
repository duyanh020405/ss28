import React, { Component } from 'react'
type name ={
    name:string
}
export default class Bt1 extends Component<name> {
    public state: name
    constructor(props:name){
        super(props)
        this.state ={
            name:"Nguyen Minh Son"
        }
    }
  render() {
    return (
      <div>
        <h4>Bai 1</h4>
        <p>Ho va Ten : {this.state.name}</p>
      </div>
    )
  }
}

