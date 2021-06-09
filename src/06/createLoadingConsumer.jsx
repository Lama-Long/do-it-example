import React from 'react';
import { contextPropTypes, DEFAULT_KEY } from './LoadingProviderWithKey';
import PropTypes from 'prop-types';

export default (contextKey = DEFAULT_KEY) => {
    function LoadingConsumer({ render }, context) {
        return render(context[contextKey]);
    }

    LoadingConsumer.contextTypes = {
        [contextKey]: contextPropTypes,
    };
    LoadingConsumer.propTypes = {
        render: PropTypes.func.isRequired,
    };
    return LoadingConsumer;
};
