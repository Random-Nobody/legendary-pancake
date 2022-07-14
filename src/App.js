import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, ThemeHandler, Wrapper } from 'App.styles';

import Navbar from 'components/Navbar/Navbar';

function App() {
  const [theme, ] = useState('dark');

  return (
    <ThemeProvider theme={ThemeHandler(theme)}>
      <GlobalStyles />
      <Navbar />
      <Wrapper>
        
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
