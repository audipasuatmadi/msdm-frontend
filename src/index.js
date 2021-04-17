import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: green,
    background: {
      default: '#f6f7ff',
      light: '#F3F5FF',
    },
  },
  overrides: {
    MuiButton: {
      containedPrimary: {
        color: '#fff',
      },
    },
    MuiPaper: {
      elevation1: {
        boxShadow: '0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A'
      }
    },
    MuiCardActions: {
      root: {
        padding: '16px'
      }
    }
  },
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
