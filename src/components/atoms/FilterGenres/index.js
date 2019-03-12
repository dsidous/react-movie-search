import React, { Component } from 'react';
import Select from 'react-select';
import { propTypes } from './propTypes';

import 'react-select/dist/react-select.css';

class FilterGenres extends Component {
  static propTypes = propTypes;

  state = {
    options: [],
    value: '',
  }

  componentDidMount() {
    const { value, genres } = this.props;
    const options = genres.map(genre => ({ label: genre.name, value: String(genre.id) }));
    this.setState({ value, options });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.value });
  }

  render() {
    const { value, options } = this.state;
    const { onChange } = this.props;
    return (
      <div className="section">
        <Select
          multi
          simpleValue
          value={value}
          placeholder="Filter by genres..."
          options={options}
          onChange={onChange}
        />
      </div>
    );
  }
}

export default FilterGenres;
