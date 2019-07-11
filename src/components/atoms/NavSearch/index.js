/* eslint-disable camelcase */
import React, { useState } from 'react';
import Downshift from 'downshift';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import { fade, makeStyles } from '@material-ui/core/styles';

import noimage from '../../../images/noimage.jpg';

const useStyles = makeStyles(theme => ({
  inputRoot: {
    color: 'inherit',
    '&:before': {
      display: 'none',
    },
    '&:after': {
      display: 'none',
    },
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  iconButton: {
    background: '#fff',
    borderRadius: 0,
    color: '#000',
    height: '31px',
  },
  container: {
    color: theme.palette.common.black,
    display: 'flex',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.55),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.65),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  paper: {
    left: 0,
    marginTop: '8px',
    paddingLeft: 0,
    position: 'absolute',
    top: '32px',
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

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

const handleChange = () => {
  return console.log('HERE');
  // const { history } = this.props;

  // if (typeof selected[0] === 'undefined') {
  //   return null;
  // }

  // return history.push(`/${selected[0].media_type}/${selected[0].id}`);
};

const NavSearch = (props) => {
  const [options, setOptions] = useState(null);
  const classes = useStyles(props);

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

  const { config } = props;

  return (
    <Downshift
      id="downshift-simple"
      onChange={handleChange}
    >
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
          ...inputProps
        } = getInputProps({
          placeholder: 'Search ...',
        });

        return (
          <div className={classes.container}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            {renderInput({
              fullWidth: true,
              classes,
              InputProps: {
                onBlur,
                onFocus,
                onKeyUp: () => handleSearch(inputValue),
              },
              inputProps,
              inputValue,
            })}

            <div {...getMenuProps()}>
              {isOpen ? (
                <Paper className={classes.paper} component="ul">
                  {(options)
                    ? options.map((option, index) => renderMenuItemChildren({
                      index,
                      option,
                      config,
                      itemProps: getItemProps,
                      highlightedIndex,
                      selectedItem,
                    }))
                    : null
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

export default NavSearch;
