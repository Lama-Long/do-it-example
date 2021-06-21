import React, { PureComponent } from 'react';
import AppLayout from './components/AppLayout';
import MainPage from './components/main/MainPage';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import ModalProvider from './ModalProvider';

class CoinApp extends PureComponent {
  store = configureStore();
  render() {
    return (
      <Provider store={this.store}>
        <ModalProvider>
          <AppLayout>
            <MainPage />
          </AppLayout>
        </ModalProvider>
      </Provider>
    );
  }
}

export default CoinApp;
