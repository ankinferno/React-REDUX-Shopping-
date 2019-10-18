 import React, { Component } from 'react'
 import HeaderComp from '../Outlay/header';
import ItemPage from './Item_Page';
import CartPage from './Cart_Page';
import FooterComp from '../Outlay/footer';


 
 class Homepage extends Component {

    render() {
        return (
                    <React.Fragment>
                        <HeaderComp/>
                         <div className="row">
                             <div className="col-md-8 col-lg-8 col-sm-6">
                                   <div className="card-columns">  <ItemPage/> </div>
                             </div>

                             <div className="col-md-4 col-lg-4 col-sm-6">
                             <CartPage/>
                             </div>

                         </div>   
          
                             
                        <hr/>
                        <FooterComp/>
                    
                    </React.Fragment>
        )     
             }



}

export default Homepage;