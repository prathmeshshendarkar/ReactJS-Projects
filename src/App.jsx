import React from 'react';
import LifeCycle from './MainComponents/LifeCycle';
import Test from './MainComponents/Test';
import IPOD from './MainComponents/IPOD';
import {ThemeProvider} from './MainComponents/Components/IPOD/Providers/ThemeProvider';

class App extends React.Component {
  render(){
    return (
      <>
        {/* <LifeCycle /> */}
        <ThemeProvider>
          <IPOD/>
        </ThemeProvider>
        {/* <Test /> */}
      </>
    )
  }
}

export default App;