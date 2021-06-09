import { connect } from 'react-redux';
import { setAge } from '../actions/cellectionActions02';
import ActionComponent from '../ActionComponent02';
import { resetLoading, setLoading } from '../actions/loadingActions';
import { setUser } from '../actions/userActions';
import { setCollection } from '../actions/cellectionActions01';

const mapDispatchToProps = {
    setLoading,
    setUser,
    resetLoading,
    setCollection,
    setAge,
};

export default connect(null, mapDispatchToProps)(ActionComponent);
