import React, { PureComponent } from 'react';
import CoinOverview from './CoinOverview';
import TransactionListContainer from '../../containers/main/TransactionListContainer';
import NotificationContainer from '../../containers/main/NotificationContainer';

class MainPage extends PureComponent {
  render() {
    return (
      <>
        <CoinOverview />
        <TransactionListContainer />
        <NotificationContainer />
      </>
    );
  }
}

export default MainPage;
