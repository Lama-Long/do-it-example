import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Consumer as ModalConsumer } from '../../../doit-ui/Modal/context';
import Form from '../../../doit-ui/Form';
import Spacing from '../../../doit-ui/Spacing';
import Text from '../../../doit-ui/Text';
import Input from '../../../doit-ui/Input';
import InlineList from '../../../doit-ui/InlineList';
import Button from '../../../doit-ui/Button';

class RegisterPage extends PureComponent {
  handleSubmit = (values, closeModal) => {
    const { createUser } = this.props;
    createUser(values, closeModal);
  };
  render() {
    const { loading } = this.props;
    return (
      <ModalConsumer>
        {({ closeModal }) => (
          <Form onSubmit={(values) => this.handleSubmit(values, closeModal)}>
            <Form.Consumer>
              {({ onChange, values }) => (
                <Spacing horizontal={4} vertical={8}>
                  <Text xlarge bold>
                    회원 등록
                  </Text>
                  <Spacing bottom={2}>
                    <Input
                      name="totalAmount"
                      type="number"
                      label="자산 총액"
                      onChange={onChange}
                      value={values['totalAmount']}
                    />
                  </Spacing>
                  <InlineList spacingBetween={1}>
                    <Button type="submit" primary disabled={loading}>
                      회원 등록
                    </Button>
                    <Button onPress={closeModal} disabled={loading}>
                      취소
                    </Button>
                  </InlineList>
                </Spacing>
              )}
            </Form.Consumer>
          </Form>
        )}
      </ModalConsumer>
    );
  }
}

RegisterPage.propTypes = {
  loading: PropTypes.bool,
  createUser: PropTypes.func,
};

export default RegisterPage;
