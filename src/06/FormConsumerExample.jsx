import React, { PureComponent } from 'react';
import { Consumer } from './FormContext';
import Input from '../04/InputWithStyle';

class FormConsumerExample extends PureComponent {
    render() {
        const { name, ...otherProps } = this.props;
        return (
            <Consumer>
                {({ values, errors, onChange }) => (
                    <Input
                        {...otherProps}
                        name={name}
                        onChange={onChange}
                        value={values[name]}
                        errorMessage={errors[name]}
                    />
                )}
            </Consumer>
        );
    }
}

export default FormConsumerExample;
