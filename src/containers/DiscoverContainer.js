import React, { Component} from 'react'
import Search from '../components/Search'
import FilterContainer from './FilterContainer'

class DiscoverContainer extends Component {
  render(){
    return(
      <div className="discover-wrapper">
        <Search />
        <FilterContainer />
      </div>
    )
  }
}

export default DiscoverContainer
