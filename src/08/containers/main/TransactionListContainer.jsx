import TransactionList from '../../components/main/TransactionList';
import { connect } from 'react-redux';
import { requestTransactionList, FETCH_TRANSACTION_LIST } from '../../transactionPackActions';

const mapStateToProps = (state) => {
  const { ids, entities, loadingState } = state.transactions;
  const transactions = ids.map((id) => entities[id]);
  const loading = loadingState[FETCH_TRANSACTION_LIST];
  return { transactions, loading };
};
const mapDispatchToProps = {
  requestTransactionList,
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
