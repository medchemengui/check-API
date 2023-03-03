import axios from 'axios'
import React, { Component } from 'react'
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default class Modal1 extends Component { 
    constructor(){
        super()
        this.state={
            show:false,
            title:'',
            color:'',
            size:'',
            price:'',
            image:[]
           
        }
    }
    handlechange(event){
      this.setState({[event.target.name]:event.target.value})
      

  
    }
     handleSubmit(){ 
      
      this.setState({show:!this.state.show})};
     
      async getimage(){
        const {title,color,size,price}=this.state
      const formData=new FormData()
      formData.append('file',this.state.image)
      formData.append('upload_preset','ml_default')
      await axios.post('http://api.cloudinary.com/v1_1/ddnogb6yk/upload',formData).then((res)=>{
       localStorage.setItem('key',JSON.stringify({
        title:title,
        color:color,
        size:size,
        price:price,
        image:res.data.url
       })) 
      })
     this.props.myfunction()
     
      
    }
     render() {
    return (
        <>
        
        <Button variant="primary" onClick={()=> this.handleSubmit()}>
          Launch demo modal
        </Button>
  
        <Modal show={this.state.show} onHide={()=> this.handleSubmit()}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text"  name='title' placeholder="Enter title" onChange={(event)=>this.handlechange(event)} />
              </Form.Group>
              {console.log(this.state)}

              <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Color</Form.Label>
              <Form.Control type="text" name='color' placeholder="Enter color" onChange={(event)=>this.handlechange(event)} />
              </Form.Group> 


              <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Size</Form.Label>
              <Form.Control type="number" name='size' placeholder="Enter size" onChange={(event)=>this.handlechange(event)} />
              </Form.Group> 

              <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" name='price' placeholder="Enter price" onChange={(event)=>this.handlechange(event)} />
              </Form.Group> 

              <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" name='image' accept="image" placeholder="Enter photo " onChange={(event)=>this.setState({image:event.target.files[0]})} />
              </Form.Group> 



          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={()=> this.handleSubmit()}>
              Close
            </Button>
            <Button variant="primary" onClick={()=> this.getimage()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
      
    )
  }
}
