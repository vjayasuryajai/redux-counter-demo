import {INCREMENT, DECREMENT} from './action'


export const increment =(inc)  =>{

    return {


        type : INCREMENT,
        payload : inc
      
    }
}


export const decrement =(dec)  =>{

    return {


        type : DECREMENT,
        payload : dec
       
    }
}