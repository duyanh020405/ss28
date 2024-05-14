import React, { Component } from 'react'
interface Post {
    id:number,
    title:string,
    content:string,
    author:string
}
interface Props {
    listPost:Post[]
}
export default class Bt7Child extends Component<Props> {
  render() {
    const {listPost} = this.props
    return (
      <div>
        <h4>Bai 7</h4>
        {
            listPost.map((item,index)=>{
                return <li key={index}>id : {item.id}, title : {item.title}, content : {item.content}, author : {item.author}</li>
            })
        }
      </div>
    )
  }
}
