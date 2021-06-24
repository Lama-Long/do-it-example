import createModalProvider from '../doit-ui/Modal/create';
import { REGISTER_USER_MODAL, TRADE_COIN_MODAL } from './constants/modals';
import TradeCoinPageContainer from './containers/main/TradeCoinPageContainer';
import RegisterPageContainer from './containers/main/RegisterPageContainer';

export default createModalProvider({
  [TRADE_COIN_MODAL]: TradeCoinPageContainer,
  [REGISTER_USER_MODAL]: RegisterPageContainer,
});
