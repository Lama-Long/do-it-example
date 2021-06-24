import { connect } from 'react-redux';
import TransactionSearchFilter from '../../components/main/TransactionSearchFilter';
import { setFilter } from '../../actions/searchFilterActions';
import { requestTransactionList } from '../../actions/transactionPackActions';

export default connect(null, { requestTransactionList, setFilter })(TransactionSearchFilter);
