import { whileStatement } from '@babel/types';
import Header from './components/Header'
import Lobby from './components/Lobby'
import colorContext from './context/colorContext';
import React from "react"
import Provider from './context/colorContext';

function App() {

  
  // const state = {
  //   color: 'red',
  //   toggleColor: () => {
  //     (color === 'red' ? 'blue' : 'red')
  //   }
  // }

  return (
    // <colorContext.Provider 
    // value={value}>
    // <div className='container'>
    <Provider>
      <Lobby />
    </Provider>
    // </div>
    // </colorContext.Provider>
  );
}

export default App;
