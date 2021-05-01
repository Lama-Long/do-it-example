import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PropsComponent extends Component {
    render() {
        return <div></div>;
    }
}

PropsComponent.prototype = {
    name: PropTypes.string,
};

export default PropsComponent;
