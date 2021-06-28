import React, { PureComponent } from 'react';
import CoinOverview from './CoinOverview';
import TransactionList from '../../containers/main/TransactionListContainer';

class MainPage extends PureComponent {
  render() {
    return (
      <>
        <CoinOverview />
        <TransactionList />
      </>
    );
  }
}

export default MainPage;
