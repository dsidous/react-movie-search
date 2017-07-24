import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import App from './components/App'
import DiscoverContainer from './components/DiscoverContainer'

const Root = ({store}) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/movie/:movieId" component={App} />
      <Route path="/discover" component={DiscoverContainer} />
    </Router>
  </Provider>
)

export default Root
