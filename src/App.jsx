import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, ThemeHandler, AppWrapper } from 'App.styles';
import AppContext from 'App.context';

import Navbar from 'components/Navbar/Navbar';

function App() {
  const [theme,] = useState('dark');
  const [appState, setState] = useState({
    user: {
      name: 123
    },
    currentWidth: 0
  });

  useEffect(() => {
    const handleResize = () => setState(prevState => { return { ...prevState, ...{ currentWidth: window.innerWidth } } });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return (
    <ThemeProvider theme={ThemeHandler(theme)}>
      <GlobalStyles />
      <AppContext.Provider value={[appState, setState]}>
        <Navbar />
        <AppWrapper>
          {JSON.stringify(appState, null, 2)}
        </AppWrapper>
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default App;
