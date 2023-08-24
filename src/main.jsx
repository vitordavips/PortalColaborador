import React from 'react';
import ReactDOM from 'react-dom/client';
// Essa Biblioteca vai prover um Tema.
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';

import theme from './styles/theme.js';

import { Details } from './Pages/Details';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Details />
    </ThemeProvider>
  </React.StrictMode>,
)
