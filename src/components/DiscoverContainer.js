import React, { Component} from 'react'
import Search from './Search'
import Filter from './Filter'

class DiscoverContainer extends Component {
  render(){
    return(
      <div className="discover-wrapper">
        <Search />
        <Filter />
      </div>
    )
  }
}

export default DiscoverContainer
