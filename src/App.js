import React from 'react';
import Main from './component/mainComponent'
import {store} from './store/mainStore';
import {Provider} from 'react-redux'
import './App.css';
class App extends React.Component{
  render(){
    return <Provider store={store}><div>
     <Main/>
    </div>
    </Provider>
  }
}

export default App;
