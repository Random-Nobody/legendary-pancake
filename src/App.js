import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, GetTheme } from 'App.styles';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeProvider theme={GetTheme(theme)}>
      <GlobalStyles>
        hello
      </GlobalStyles>
    </ThemeProvider>
  );
}

export default App;
