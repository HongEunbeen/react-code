import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from "styled-components"
import App from './App';
import { darkThmem, lightTheme } from './theme';


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkThmem}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
