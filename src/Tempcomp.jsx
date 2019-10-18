import React, { Component } from 'react'
import {connect} from 'react-redux';
import {ADDAction } from './Redux/actions/AddsubAction';

 class Temp extends Component{
    render() 
    {
       return (
      <div className="App">
        <button onClick={this.props.ADDAction}>+ ADD</button>
        <h3>HERER IS COUNTER : {this.props.counter}</h3>
       <p>my APP</p>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    counter : state.counter.counter
  }
}
const mapDispatchToProps = dispatch => ({
  ADDAction : () => dispatch(ADDAction())
});

export default connect(mapStateToProps,mapDispatchToProps)(Temp);
