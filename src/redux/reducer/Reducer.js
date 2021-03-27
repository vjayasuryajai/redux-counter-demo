
import {INCREMENT, DECREMENT} from '../action/action'

const Initialstate={

    id : 0
}
const  createreducer=(state=Initialstate , action) =>{

    switch (action.type) {
   case INCREMENT :
       return{
        ...state,
        id : state.id + action.payload
       }



       case DECREMENT :
       return{
        ...state,
        id : state.id - action.payload
       }

       default :  return  state 

    }



}

export default createreducer