import createModalProvider from '../doit-ui/Modal/create';
import { TRADE_COIN_MODAL } from './constants/modals';
import TradeCoinPageContainer from './containers/main/TradeCoinPageContainer';

export default createModalProvider({
  [TRADE_COIN_MODAL]: TradeCoinPageContainer,
});
