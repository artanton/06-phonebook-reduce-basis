import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
// import PropTypes from "prop-types";
import { ThemeProvider } from 'styled-components';
import { theme } from 'components/Theme';
import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
