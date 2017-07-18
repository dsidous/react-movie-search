import React, { Component} from 'react'
import Filter from './Filter'
import ResultContainer from './ResultContainer'

class DiscoverContainer extends Component {
  render(){
    return(
      <div>
        <Filter />
        <ResultContainer />
      </div>
    )
  }
}

export default DiscoverContainer
