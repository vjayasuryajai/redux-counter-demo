
import './App.css';
import Counter from './component/Counter'

import {Provider}  from 'react-redux'
  import store from './redux/store/Store'

function App() {
  return (

    <Provider store ={store}>
    <div className="App">
     <Counter />
    </div>
    </Provider>
  );
}

export default App;
