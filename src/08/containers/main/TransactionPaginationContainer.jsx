import { FETCH_TRANSACTION_LIST, requestTransactionList } from '../../transactionPackActions';
import { connect } from 'react-redux';
import TransactionPagination from '../../components/main/TransactionPagination';

const mapStateToProps = (state) => {
  const { pagination, loadingState, ids } = state.transactions;
  const { number, size } = pagination;
  const loading = loadingState[FETCH_TRANSACTION_LIST];
  return {
    pageNumber: number || 1,
    hasNext: ids.length === size,
    loading,
    searchParams: state.searchFilter.params,
  };
};

const mapDispatchToProps = {
  requestTransactionList,
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionPagination);
