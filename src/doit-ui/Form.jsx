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
    const { values, errors } = this.state;
    return (
      <Provider value={{ errors, values, onChange: this.onChange, reset: this.reset }}>
        <form onSubmit={this.handleSubmit}>{this.props.children}</form>
      </Provider>
    );
  }
}

FormProvider.propTypes = {
  validate: PropTypes.func,
  onSubmit: PropTypes.func,
};

FormProvider.defaultProps = {
  initValues: {},
  validate: () => ({}),
};

export default FormProvider;
