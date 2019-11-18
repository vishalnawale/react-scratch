import React from 'react';
import Main from './components/MainComponent';
import { Provider } from 'react-redux';
import {ConfigureStore} from './redux/configureStore';

const store = ConfigureStore();
// json-server --host 192.168.0.101 db.json
export default class App extends React.Component{
  render (){
    return (

      <Provider store={store}>
            <Main />
      </Provider>
    )
  }
}


