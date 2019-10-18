import React, { Component } from 'react'
import {connect } from 'react-redux';
import SingleItem from './Presentational_component/Single_Item';
import data from '../../data/Catalog.json';
import {AddItem} from '../../Redux/actions/CartAction';

class ItemPage extends Component{

    render() {

      
        return (
            <React.Fragment>
                
                <div className="container">{ data.Catalog.map(value => {
                     return (
                         <React.Fragment>
                        <SingleItem key={value.id} data={value}/> 
                        {console.log("inside BEFORE dispactcher")} 
                        <button className="btn btn-primary" onClick={(event) => this.props.AddItem(value.id)}>Buy</button>
                         </React.Fragment>
                        
                     )  
                    }
                         )
                            }</div>
                          
            </React.Fragment>
        )
    }
}



export default connect( null, {AddItem})(ItemPage)