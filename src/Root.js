import React from 'react'
import { Provider } from 'react-redux'
import { Switch, Route, BrowserRouter as Router,  } from 'react-router-dom'
import App from './components/App'
import DiscoverContainer from './containers/DiscoverContainer'
import PersonContainer from './containers/PersonContainer'
import HomepageContainer from './containers/HomepageContainer'

// const appHistory = useRouterHistory(createHistory)({
//   basename: "/movie-search"
// });

const Root = ({store}) => (
  <Provider store={store}>
    <Router basename="/movie-search">
      <Switch>   
        <Route exact={true} path="/" component={HomepageContainer} />
        <Route exact={true} path="/movie/:movieId" component={App} />
        <Route path="/person/:personId" component={PersonContainer} />
        <Route path="/discover" component={DiscoverContainer} />
      </Switch>
    </Router>
  </Provider>
)

export default Root
