import React, { Component } from 'react'
import {connect} from 'react-redux'
import {increment, decrement} from '../redux/index'

export class Counter extends Component {




    render() {
        return (
            <div>
                <button onClick = {this.props.increment}>+</button>
                <button onClick = {this.props.decrement}>-</button>
                <p>{this.props.id}</p>
            </div>
        )
    }
}




const mapStateToProps = state => {

    return {
     
    id :  state.id
    
    }
}


const mapDispatchToProps = dispatch =>{
    return {
        increment  : () => dispatch(increment(5)),
        decrement  : () => dispatch(decrement(5))

    
    }
    
    
    }
export default connect (mapStateToProps,mapDispatchToProps)(Counter)
