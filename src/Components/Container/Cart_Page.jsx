import React, { Component } from 'react'
import {connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'

class CartPage extends Component{

    render() {
        return (
            <React.Fragment>
                
              <div className="container jumbotron">
             

                  <h3>ITEMS IN CART:  <FontAwesomeIcon icon={faCartArrowDown}/><span className="badge badge-info">{this.props.itemcount}</span></h3>
              
                  <h4>item id : {this.props.itemsid}</h4>                
            </div>
             
             
            </React.Fragment>
        )
    }
} 


const mapStateToProps  = (state)=> ({
    itemcount : state.cartItem.itemCount ,
    itemsid : state.cartItem.itemsid
})
export default connect(mapStateToProps)(CartPage)