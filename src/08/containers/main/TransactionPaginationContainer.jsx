import { connect } from 'react-redux';
import TransactionPagination from '../../components/main/TransactionPagination';
import { transactionListLoadingStateSelector } from '../../selectors/transactionSelectors';
import { requestTransactionList } from '../../actions/transactionPackActions';

const mapStateToProps = (state) => {
  const { pagination, ids } = state.transactions;
  const { number, size } = pagination;
  return {
    pageNumber: number || 1,
    hasNext: ids.length === size,
    loading: transactionListLoadingStateSelector(state),
    searchParams: state.searchFilter.params,
  };
};

const mapDispatchToProps = {
  requestTransactionList,
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionPagination);
