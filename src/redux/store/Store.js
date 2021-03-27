import {createStore} from 'redux';
import createreducer from '../reducer/Reducer'

 const store = createStore(createreducer)

 export default store