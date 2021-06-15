import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const { Consumer, Provider } = React.createContext({});

class FormProvider extends PureComponent {
    static Consumer = Consumer;
    static getDerivedStateFromProps({ initValues }, prevState) {
        const values = initValues !== prevState.initValues ? initValues : prevState.values;

        return {
            initValues,
            values,
            errors: {},
        };
    }

    state = {};

    handleSubmit = (e) => {
        const { values, errors } = this.state;
        e.preventDefault();
        if (Object.values(errors).length === 0) {
            this.props.onSubmit(values);
        }
    };

    onChange = (name, updatedValue) => {
        this.validate(this.state.values);
        this.setState(({ values }) => ({
            values: {
                ...values,
                [name]: updatedValue,
            },
        }));
    };

    reset = () => {
        this.setState({ values: {} });
    };

    validate = (values) => {
        const { validate } = this.props;
        if (!validate) {
            return;
        }
        const errors = this.props.validate(values);
        this.setState({ errors });
    };

    render() {
        const { values, errors, children } = this.props;

        return (
            <Provider value={{ errors, values, onChange: this.onChange, reset: this.reset }}>
                <form onSubmit={this.handleSubmit}>{children}</form>
            </Provider>
        );
    }
}

FormProvider.propTypes = {
    validate: PropTypes.func,
};

FormProvider.defaultProps = {
    initValues: {},
    validate: () => ({}),
};

export default FormProvider;
