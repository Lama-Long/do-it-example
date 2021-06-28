import notification from './notificationReducer';
import searchFilter from './searchFilterReducer';
import createReducers from '../../11/api-redux-pack/createReducers';
import routerReducer from './routerReducer';

const apiReducers = createReducers('transactions', 'users');
export default {
  ...apiReducers,
  notification,
  searchFilter,
  routerReducer,
};
