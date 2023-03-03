import React, { Component } from 'react'
import ShopCard from './ShopCard'

export default class CardList extends Component {
    constructor(props){
        super(props)
    }
  
    render() {
    return (
      <div>
        {this.props.data.map((el,index)=>{return(<div key={index}> <ShopCard product={el} /></div>)})}
        
      </div>
    )
  }
}

