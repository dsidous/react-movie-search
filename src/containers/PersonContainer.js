import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import * as actions from '../actions'
import Search from '../components/Search'
import CastProfileContainer from './CastProfileContainer'

class PersonContainer extends Component{
  state = {
    personId: this.props.params.personId || ''
  }

  static propTypes = {
    person : PropTypes.object.isRequired
  }

  componentDidMount(){
    let personId = this.state.personId;
    if (personId !== '') {
      this.props.dispatch(actions.updatePerson(personId));
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.personId && (nextProps.params.personId !== this.state.personId)) {
      let personId = nextProps.params.personId;
      this.props.dispatch(actions.updatePerson(personId));
      this.setState({personId});
    }
  }

  render() {
    return (
      <div>
        <Search />
        <CastProfileContainer />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect(
  mapDispatchToProps
)(PersonContainer);
