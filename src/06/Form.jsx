import React from 'react';

import { Provider } from './FormContext';
import PropTypes from 'prop-types';

class FormProvider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            values: {},
            errors: {},
        };
    }

    onChange = (name, updatedValue) => {
        this.setState(
            ({ values }) => ({
                values: {
                    ...values,
                    [name]: updatedValue,
                },
            }),
            () => this.validate(this.state.values),
        );
    };

    reset = () => {
        this.setState({ values: {}, errors: {} });
    };

    submit = () => {
        this.props.onSubmit(this.state.values);
    };
    validate = (values) => {
        const { validate } = this.props;
        if (!validate) {
            return;
        }
        const errors = validate(values);
        this.setState({ errors });
    };

    render() {
        const { values, errors } = this.state;
        return (
            <Provider
                value={{
                    errors,
                    values,
                    onChange: this.onChange,
                    reset: this.reset,
                    submit: this.submit,
                }}
            >
                {this.props.children}
            </Provider>
        );
    }
}

FormProvider.propTypes = {
    validate: PropTypes.func,
};

export default FormProvider;