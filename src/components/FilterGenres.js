import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class FilterGenres extends Component {
  constructor(props){
    super(props);
    this.state = {
      options: props.genres.map(genre => ({label:genre.name,value:String(genre.id)})),
			value: []
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({ value:nextProps.value });
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
		);
	}
}

export default FilterGenres;
