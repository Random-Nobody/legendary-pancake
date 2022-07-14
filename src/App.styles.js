import styled, { createGlobalStyle } from "styled-components";

const commonTheme = {
  contentPad: 'max(calc(0.5 * (100vw - 1300px)), 2rem)'
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
  secondary: "#bb86fc",

  background: '#121212',
  surface: "rgba(255,255,255,0.05)",
  surface1: "rgba(255,255,255,0.07)",
  surface2: "rgba(255,255,255,0.08)",
  surface3: "rgba(255,255,255,0.09)",
  surface4: "rgba(255,255,255,0.011)",
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
      return {...lightTheme, ...commonTheme};
    default:
      return {...darkTheme, ...commonTheme};
  }
}

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        user-select: none;
    }
    
    body {
        background: ${p => p.theme.background};
        color: ${p=>p.theme.onBackground};
        font-family: helvetica, arial, sans-serif;
        font-size: 13px;
        line-height: 1;
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

export const Wrapper = styled.div`
  
`;