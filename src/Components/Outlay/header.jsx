import React, { Component } from 'react';
import {Navbar  , Nav } from 'react-bootstrap';

export default class HeaderComp extends Component{
    state={};
    
    render(){
        return(

            <React.Fragment>

<Navbar bg="light" expand="lg" >
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Products</Nav.Link>
      <Nav.Link href="#link"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i></Nav.Link>
      
    </Nav>

  </Navbar.Collapse>
</Navbar>
     </React.Fragment>

        )
    }
}