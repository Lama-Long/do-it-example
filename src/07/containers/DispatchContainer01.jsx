import { connect } from 'react-redux';
import { setAge } from '../actions/cellectionActions02';
import ActionComponent from '../ActionComponent01';

const mapDispatchToProps = {
    setAge,
};

export default connect(null, mapDispatchToProps)(ActionComponent);
