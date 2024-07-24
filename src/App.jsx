import React from 'react';
import LifeCycle from './MainComponents/LifeCycle';
import Test from './MainComponents/Test';
import IPOD from './MainComponents/IPOD';

class App extends React.Component {
  render(){
    return (
      <>
        {/* <LifeCycle /> */}
        <IPOD/>
        {/* <Test /> */}
      </>
    )
  }
}

export default App;