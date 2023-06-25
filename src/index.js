import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { ThemeProvider } from '@emotion/react';
import { theme } from './components/theme';
import App from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <PersistGate persistor={persistor} loading={null}>
        <Provider store={store}>
          <App />
        </Provider>
      </PersistGate>
    </ThemeProvider>
  </React.StrictMode>
);
