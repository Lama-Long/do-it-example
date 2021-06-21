import React, { PureComponent } from 'react';
import Heading from '../../../doit-ui/Heading';
import InlineList from '../../../doit-ui/InlineList';
import CoinDashlet from './CoinDashlet';

class CoinOverview extends PureComponent {
  render() {
    return (
      <>
        <Heading level={3}>코인 동향</Heading>
        <InlineList>
          <CoinDashlet code="BTX" name="비트코인(BTX)" priceLabel="4216000" />
          <CoinDashlet code="ETH" name="이더리움(ETH)" priceLabel="216000" />
          <CoinDashlet code="DOIT" name="두잇코인(DOIT)" priceLabel="36000" />
        </InlineList>
      </>
    );
  }
}

export default CoinOverview;
