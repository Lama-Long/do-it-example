import TransactionList from '../../components/main/TransactionList';
import { connect } from 'react-redux';
import {
  transactionListLoadingStateSelector,
  transactionListSelector,
} from '../../selectors/transactionSelectors';
import { requestTransactionList } from '../../actions/transactionPackActions';

const mapStateToProps = (state) => {
  return {
    transactions: transactionListSelector(state),
    loading: transactionListLoadingStateSelector(state),
  };
};
const mapDispatchToProps = {
  requestTransactionList,
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
