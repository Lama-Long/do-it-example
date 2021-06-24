import { connect } from 'react-redux';
import { userCreateLoadingStateSelector } from '../../selectors/userSelectors';
import { createUser } from '../../actions/userActions';
import RegisterPage from '../../components/signup/RegisterPage';

export default connect(
  (state) => ({ loading: userCreateLoadingStateSelector(state) }),
  () => ({ createUser }),
)(RegisterPage);
