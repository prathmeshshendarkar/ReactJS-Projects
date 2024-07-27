import React from 'react';
import IPOD from './MainComponents/IPOD';
import {ThemeProvider} from './MainComponents/Components/IPOD/Providers/MyProvider';
import { AppListProvider } from './MainComponents/Components/IPOD/Providers/MyProvider';

class App extends React.Component {
  render(){
    return (
      <>
        {/* <LifeCycle /> */}
        <ThemeProvider>
          <AppListProvider>
            <IPOD/>
          </AppListProvider>
        </ThemeProvider>
        {/* <Test /> */}
      </>
    )
  }
}

export default App;