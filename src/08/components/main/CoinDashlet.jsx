import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Card from '../../../doit-ui/Card';
import Heading from '../../../doit-ui/Heading';
import Text from '../../../doit-ui/Text';
import InlineList from '../../../doit-ui/InlineList';
import Button from '../../../doit-ui/Button';
import { Consumer as ModalConsumer } from '../../../doit-ui/Modal/context';
import { TRADE_COIN_MODAL } from '../../constants/modals';

class CoinDashlet extends PureComponent {
  render() {
    const { name, priceLabel, code } = this.props;
    return (
      <ModalConsumer>
        {({ openModal }) => (
          <Card vertical={4} horizontal={4}>
            <Heading level={4}>
              {name}
              <Text>{priceLabel}</Text>
            </Heading>
            <InlineList spacingBetween={1}>
              <Button
                primary
                small
                onPress={() =>
                  openModal(TRADE_COIN_MODAL, { type: 'buy', code, name, price: priceLabel })
                }
              >
                매도
              </Button>
              <Button
                small
                onPress={() =>
                  openModal(TRADE_COIN_MODAL, { type: 'sell', code, name, price: priceLabel })
                }
              >
                매수
              </Button>
            </InlineList>
          </Card>
        )}
      </ModalConsumer>
    );
  }
}

CoinDashlet.propTypes = {
  name: PropTypes.string,
  priceLabel: PropTypes.string,
};

export default CoinDashlet;
