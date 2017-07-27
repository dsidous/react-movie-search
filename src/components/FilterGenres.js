import React, { Component } from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'

import 'react-select/dist/react-select.css'

class FilterGenres extends Component {
  state = {
    options: this.props.genres.map(genre => ({label:genre.name,value:String(genre.id)})),
    value: []
  }

  static propTypes = {
    genres: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.value })
  }

  render () {

		return (
			<div className="section">
        <Select
          multi
          simpleValue
          value={this.state.value}
          placeholder="Filter by genres..."
          options={this.state.options}
          onChange={this.props.onChange}
        />
			</div>
		)
	}
}

export default FilterGenres;
