import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { setLocation } from '../actions/routerActions';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withRouter } from 'react-router-dom';

class RouterState extends PureComponent {
  componentDidMount() {
    const { setLocation, location } = this.props;
    setLocation(location);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { setLocation, location } = this.props;
    setLocation(location);
  }

  render() {
    return null;
  }
}

RouterState.propTypes = {
  setLocation: PropTypes.func,
  location: PropTypes.object,
};

export default compose(connect(null, { setLocation }), withRouter)(RouterState);
