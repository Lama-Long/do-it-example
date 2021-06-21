import React, { PureComponent } from 'react';
import Form from '../../../doit-ui/Form';
import InlineList from '../../../doit-ui/InlineList';
import Text from '../../../doit-ui/Text';
import Select, { Option } from '../../../doit-ui/Select';
import Input from '../../../doit-ui/Input';
import Button from '../../../doit-ui/Button';
import PropTypes from 'prop-types';

class TransactionSearchFilter extends PureComponent {
  handleSubmit = (values) => this.props.requestTransactionList(this.getFilteringValues(values));

  getFilteringValues(values) {
    return Object.entries(values).reduce((a, b) => {
      a[b[0]] = b[1] || undefined;
      return a;
    }, {});
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
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
                  name="currentPrice_gte"
                  value={values['currentPrice_gte']}
                  onChange={onChange}
                  label="최소 거래가"
                />
                <Input
                  name="currentPrice_lte"
                  value={values['currentPrice_lte']}
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
  requestTransactionList: PropTypes.func,
};

export default TransactionSearchFilter;
