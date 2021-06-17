import React, { PureComponent } from 'react';
import Heading from '../../../doit-ui/Heading';
import Card from '../../../doit-ui/Card';
import TransactionTable from './TransactionTable';
import Api from '../../Api';
import TransactionSearchFilterContainer from '../../containers/main/TransactionSearchFilterContainer';
import PropTypes from 'prop-types';

class TransactionList extends PureComponent {
  componentDidMount() {
    Api.get('/transactions').then(({ data }) => this.props.setTransactionList(data));
  }

  render() {
    const { transactions } = this.props;
    return (
      <div>
        <Heading level={3}>거래 현황</Heading>
        <Card vertical={4} horizontal={4}>
          <TransactionSearchFilterContainer />
        </Card>
        <Card>
          <TransactionTable transactions={transactions} />
        </Card>
      </div>
    );
  }
}

TransactionList.propTypes = {
  setTransactionList: PropTypes.func,
};

TransactionList.defaultProps = {
  transactions: [],
  setTransactionList: () => {},
};

export default TransactionList;
