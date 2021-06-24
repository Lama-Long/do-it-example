import { connect } from 'react-redux';
import {
  CREATE_TRANSACTION,
  createTransaction,
  requestTransactionList,
} from '../../actions/transactionPackActions';
import TradeCoinPage from '../../components/main/TradeCoinPage01';

const mapStateToProps = (state) => {
  const { loadingState } = state.transactions;
  const loading = loadingState[CREATE_TRANSACTION];
  return { loading };
};

export default connect(mapStateToProps, { createTransaction, requestTransactionList })(
  TradeCoinPage,
);
