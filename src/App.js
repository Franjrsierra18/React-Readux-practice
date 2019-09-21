import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import Posts from './components/Posts';
import Postform from './components/Postform';



class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
          </header>
          <Postform />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
