import styled, { createGlobalStyle } from "styled-components";

const commonTheme = {
  contentPad: 'max(calc(0.5 * (100vw - 1300px)), 2rem)',
  hoverSquare: `
    &:before{
      content: ' ';
      position: absolute;
      display: block;
      background-color: rgba(0,0,0,0.3);
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
  `,
  hoverCircle: `
    &:before{
      content: ' ';
      position: absolute;
      display: block;
      background-color: rgba(0,0,0,0.3);
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border-radius: 50%;
    }
`,

  importFonts: `
    @font-face {
      font-family: 'Open Sans';
      src: url(/fonts/open-sans/OpenSans-VariableFont_wdth,wght.ttf);
    }
    @font-face {
      font-family: 'Open Sans';
      src: url(/fonts/open-sans/OpenSans-Italic-VariableFont_wdth,wght.ttf);
      font-style: italic;
    }
    @font-face {
      font-family: 'Roboto';
      src: url(/fonts/roboto/Roboto-Regular.ttf);
    }
    @font-face {
      font-family: 'Roboto';
      src: url(/fonts/roboto/Roboto-Bold.ttf);
      font-style: bold;
    }
    @font-face {
      font-family: 'Obitron';
      src: url(/fonts/orbitron/Orbitron-VariableFont-wght.ttf);
    }
  `,
  font: {
    header: "'Orbitron', sans-serif;",
    body: "'Open Sans', sans-serif;"
  }
}

const lightTheme = {
  primary: "#7d3add",
  primary2: "#6200ee",
  secondary: "#03dac5",

  background: '#eee',
  surface: "#fff",
  active: '#ddd',
  error: "#b00020",

  onPrimary: '#fff',
  onError: '#fff',
  onSurface: '#555',
  onBackground: '#333',
};

const darkTheme = {
  primary: "#03dac5",
  primary2: "#20a79a",
  primaryFaded: '#03dac5c0',
  secondary: "#bb86fc",
  secondaryFaded: '#bb86fc80',

  background: '#121212',
  surface: '#202020',
  surface0: "rgba(255,255,255,0.05)",
  surface1: "rgba(255,255,255,0.07)",
  surface2: "rgba(255,255,255,0.10)",
  surface3: "rgba(255,255,255,0.12)",
  surface4: "rgba(255,255,255,0.15)",
  active: '#777',
  error: "rgba(128,32,32,0.6)",

  onPrimary: '#fff',
  onError: '#fff',
  onSurface: '#eee',
  onBackground: '#eee',
};

export const ThemeHandler = theme => {
  switch (theme) {
    case 'light':
      return { ...commonTheme, ...lightTheme };
    default:
      return { ...commonTheme, ...darkTheme };
  }
}

export const GlobalStyles = createGlobalStyle`
  ${p => p.theme.importFonts}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 20px;
    user-select: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button, a.hover {
    text-align: center;
    line-height: 30px;
    height: 40px;
    font-size: 18px;
    padding-inline: 10px;
    border: none;
    cursor: pointer;

    font-family: ${p => p.theme.font.header};
    background-color: ${p => p.background ?? 'transparent'};
    color: ${p => p.color ?? 'inherit'};

    position: relative;
    &:hover{
      ${p => p.theme.hoverSquare}
    }
  }
  
  body {
    background: ${p => p.theme.background};
    color: ${p => p.theme.onBackground};
    font-family: helvetica, arial, sans-serif;
    font-size: 13px;
    line-height: 1;
    font-family: ${p => p.theme.font.body};
  }

  #app {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
`;

export const Loading = styled.div`
  ${p => p.blur ? '' : 'visibility:hidden;'}
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(5px);
  transition: visibility 0.3s ease;

  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AppWrapper = styled.div`
  
`;