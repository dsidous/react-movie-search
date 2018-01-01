import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, useRouterHistory } from 'react-router'
import { createHistory } from 'history'
import App from './components/App'
import DiscoverContainer from './containers/DiscoverContainer'
import PersonContainer from './containers/PersonContainer'

const appHistory = useRouterHistory(createHistory)({
  basename: "/movie-search"
});

const Root = ({store}) => (
  <Provider store={store}>
    <Router history={appHistory}>
      <Route path="/" component={App} />
      <Route path="/movie/:movieId" component={App} />
      <Route path="/person/:personId" component={PersonContainer} />
      <Route path="/discover" component={DiscoverContainer} />
    </Router>
  </Provider>
)

export default Root
