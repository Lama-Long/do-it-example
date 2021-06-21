import TransactionList from '../../components/main/TransactionList';
import { connect } from 'react-redux';
import { requestTransactionList } from '../../actions/transactionActions';

const mapStateToProps = (state) => {
  const { ids, entities, loading } = state.transactions;
  const transactions = ids.map((id) => entities[id]);
  return { transactions, loading };
};
const mapDispatchToProps = {
  requestTransactionList,
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
