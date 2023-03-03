import React, { Component } from 'react'
import Navbar1 from "./Components/Navbar"
import  CardList from "./Components/CardList"
import data from './Data'
export default class App extends Component {
  getproduct(){
    var samir=JSON.parse(localStorage.getItem('key'))
    data.push(samir)
    console.log(data)
  }
  render() {
    return (
      <div>
        <Navbar1 shose={()=>this.getproduct()}/>
        <CardList data={data}/>
      </div>
    )
  }
}




