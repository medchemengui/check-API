import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { Component } from 'react'

export default class ShopCard extends Component {
    constructor(props){
        super(props)
    }
  render() {
    const {product}=this.props
    return (
        <div>
        <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src={product.image}/>
       <Card.Body>
         <Card.Title>{product.title}</Card.Title>
         <Card.Text>
         Color: {product.color}<br></br>
         Size: {product.size}<br></br>
         Price: {product.price}
         </Card.Text>
         <Button variant="primary">Go somewhere</Button>
       </Card.Body>
     </Card>
     </div>
    )
  }
}
