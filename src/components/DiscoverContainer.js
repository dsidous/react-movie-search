import React, { Component} from 'react'
import Search from './Search'
import Filter from './Filter'
import ResultContainer from './ResultContainer'

class DiscoverContainer extends Component {
  render(){
    return(
      <div>
        <Search />
        <Filter />
        <ResultContainer />
      </div>
    )
  }
}

export default DiscoverContainer
