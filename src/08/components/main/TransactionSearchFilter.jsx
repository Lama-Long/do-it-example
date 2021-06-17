import React, { PureComponent } from 'react';
import Form from '../../../doit-ui/Form';
import InlineList from '../../../doit-ui/InlineList';
import Text from '../../../doit-ui/Text';
import Select, { Option } from '../../../doit-ui/Select';
import Input from '../../../doit-ui/Input';
import Button from '../../../doit-ui/Button';
import Api from '../../Api';
import PropTypes from 'prop-types';

class TransactionSearchFilter extends PureComponent {
  render() {
    return (
      <Form
        onSubmit={(values) =>
          Api.get('/transactions', { params: values }).then(({ data }) =>
            this.props.setTransactionList(data),
          )
        }
      >
        <Form.Consumer>
          {({ onChange, values }) => {
            return (
              <InlineList spacingBetween={2} verticalAlign="bottom">
                <Text large bold>
                  검색
                </Text>
                <Select name="code" label="코인 코드" onChange={onChange} value={values['code']}>
                  <Option label="선택해주세요" value="" />
                  <Option value="BTX" label="비트코인(BTX)" />
                  <Option value="ETH" label="이더리움(ETH)" />
                  <Option value="DOIT" label="두잇코인(DOIT)" />
                </Select>
                <Input
                  name="minAmount"
                  value={values['minAmount']}
                  onChange={onChange}
                  label="최소 거래가"
                />
                <Input
                  name="maxAmount"
                  value={values['maxAmount']}
                  onChange={onChange}
                  label="최대 거래가"
                />
                <Button type={'submit'} primary>
                  검색
                </Button>
              </InlineList>
            );
          }}
        </Form.Consumer>
      </Form>
    );
  }
}

TransactionSearchFilter.propTypes = {
  setTransactionList: PropTypes.func,
};

export default TransactionSearchFilter;
