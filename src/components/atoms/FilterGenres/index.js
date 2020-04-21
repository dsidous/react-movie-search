import React, { useState, useEffect } from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import { propTypes } from './propTypes';

const FilterGenres = ({ genres, onChange }) => {
  const [selectedGenres, setSelectedGenres] = useState({
    options: [],
    selectValue: [''],
  });

  useEffect(() => {
    const options = genres.map(genre => ({
      label: genre.name,
      value: String(genre.id),
    }));
    setSelectedGenres(s => ({ ...s, options }));
  }, [genres]);

  const handleChange = event => {
    setSelectedGenres({
      ...selectedGenres,
      selectValue: event.target.value,
    });
  };

  const handleClose = () => {
    onChange(selectedGenres.selectValue);
  };

  return (
    <FormControl className="filter-element-wrapper" variant="outlined">
      <InputLabel htmlFor="genres">Genres</InputLabel>
      <Select
        multiple
        value={selectedGenres.selectValue}
        onChange={handleChange}
        onClose={handleClose}
        input={<OutlinedInput id="genres" labelWidth={50} />}
        renderValue={selected => {
          if (selected.length === 1) {
            return <span>Select genres...</span>;
          }

          const list = selected
            .filter(select => select !== '')
            .map(
              select =>
                selectedGenres.options.find(option => option.value === select)
                  .label,
            );

          return list.join(', ');
        }}
      >
        <MenuItem value="" disabled>
          Select genres...
        </MenuItem>
        {selectedGenres.options.map(option => (
          <MenuItem key={option.label} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

FilterGenres.propTypes = propTypes;

export default FilterGenres;
