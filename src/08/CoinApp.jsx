import React, { PureComponent } from 'react';
import AppLayout from './components/AppLayout';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import ModalProvider from './ModalProvider';
import NotificationContainer from './containers/NotificationContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './components/main/MainPage';
import NotFound from './components/NotFound';
import RouterStateContainer from './containers/RouterStateContainer';

class CoinApp extends PureComponent {
  store = configureStore();
  render() {
    return (
      <Provider store={this.store}>
        <Router>
          <RouterStateContainer />
          <ModalProvider>
            <AppLayout>
              <Switch>
                <Route path="/" exact render={() => <MainPage />} />
                <Route path="*" render={({ match }) => <NotFound match={match} />} />
              </Switch>
              <NotificationContainer />
            </AppLayout>
          </ModalProvider>
        </Router>
      </Provider>
    );
  }
}

export default CoinApp;
