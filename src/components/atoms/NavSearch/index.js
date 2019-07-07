/* eslint-disable camelcase */
import React, { useState } from 'react';
import Downshift from 'downshift';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core';

import noimage from '../../../images/noimage.jpg';

const styles = {};

const renderMenuItemChildren = ({
  index,
  option,
  config,
  itemProps,
  highlightedIndex,
}) => {
  const {
    id, title, name, first_air_date, release_date, poster_path, profile_path,
  } = option;
  const {
    images: {
      secure_base_url, poster_sizes, profile_sizes,
    },
  } = config;
  const isHighlighted = highlightedIndex === index;

  const listTitle = [
    title || name,
    // eslint-disable-next-line no-nested-ternary
    release_date
      ? [release_date.slice(0, 4), 'in movies'].join(' ')
      : first_air_date
        ? [first_air_date.slice(0, 4), 'in tvs'].join(' ')
        : ' in persons',
  ].join(' ');

  const listImage = (poster_path || profile_path)
    ? [
      secure_base_url,
      poster_path
        ? [poster_sizes[0], poster_path].join('')
        : [profile_sizes[0], profile_path].join(''),
    ].join('')
    : noimage;
  return (
    <MenuItem
      {...itemProps}
      key={id}
      selected={isHighlighted}
    >
      <span>
        <img src={listImage} className="movie-search-img-thumb" alt="#" />
      </span>
      <span>{listTitle}</span>
    </MenuItem>
  );
};

const handleChange = (selected) => {
  const { history } = this.props;
  if (typeof selected[0] !== 'undefined') {
    history.push(`/${selected[0].media_type}/${selected[0].id}`);
  }
};

const NavSearch = (props) => {
  const [options, setOptions] = useState(null);

  const handleSearch = async (query) => {
    if (!query) {
      return null;
    }

    const response = await fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=cfe422613b250f702980a3bbf9e90716&query=${query}`,
    );
    const json = await response.json();
    return setOptions(json.results);
  };

  const renderInput = (inputProps) => {
    const {
      inputValue,
      InputProps,
      classes,
      ref,
      ...other
    } = inputProps;

    return (
      <TextField
        onChange={handleSearch(inputValue)}
        InputProps={{
          inputRef: ref,
          classes: {
            root: classes.inputRoot,
            input: classes.inputInput,
          },
          ...InputProps,
        }}
        {...other}
      />
    );
  };

  const { classes, config } = props;

  return (
    <Downshift id="downshift-simple">
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        highlightedIndex,
        inputValue,
        isOpen,
        selectedItem,
      }) => {
        const {
          onBlur,
          onFocus,
          onChange,
          ...inputProps
        } = getInputProps({
          placeholder: 'Search for a movie or a person',
        });

        return (
          <div className={classes.container}>
            {renderInput({
              fullWidth: true,
              classes,
              InputProps: { onBlur, onFocus, onChange },
              inputProps,
              inputValue,
            })}

            <div {...getMenuProps()}>
              {isOpen ? (
                <Paper className={classes.paper} square>
                  {(options)
                    ? options.map((option, index) => renderMenuItemChildren({
                      index,
                      option,
                      config,
                      itemProps: getItemProps,
                      highlightedIndex,
                      selectedItem,
                    }))
                    : ''
                  }
                </Paper>
              ) : null}
            </div>
          </div>
        );
      }}
    </Downshift>
  );
};

export default withStyles(styles)(NavSearch);