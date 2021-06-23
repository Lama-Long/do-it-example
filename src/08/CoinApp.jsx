import React, { PureComponent } from 'react';
import AppLayout from './components/AppLayout';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import ModalProvider from './ModalProvider';
import CoinOverview from './components/main/CoinOverview';
import TransactionListContainer from './containers/main/TransactionListContainer';
import NotificationContainer from './containers/NotificationContainer';

class CoinApp extends PureComponent {
  store = configureStore();
  render() {
    return (
      <Provider store={this.store}>
        <ModalProvider>
          <AppLayout>
            <CoinOverview />
            <TransactionListContainer />
            <NotificationContainer />
          </AppLayout>
        </ModalProvider>
      </Provider>
    );
  }
}

export default CoinApp;
