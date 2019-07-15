/* eslint-disable camelcase */
import React from 'react';
import { withRouter } from 'react-router';
import Downshift from 'downshift';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import { fade, makeStyles } from '@material-ui/core/styles';

import { propTypes, itemsProps } from './propTypes';
import withSearch from '../../queries/withSearch';
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
    backgroundColor: theme.palette.common.white,
    left: 0,
    marginLeft: 0,
    position: 'absolute',
    top: '48px',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.55),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.65),
      },
      left: 'auto',
      marginLeft: theme.spacing(1),
      position: 'relative',
      top: 'auto',
      width: 'auto',
    },
  },
  paper: {
    left: 0,
    marginTop: '8px',
    maxHeight: '200px',
    overflowY: 'scroll',
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
  highlightedIndex,
  getItemProps,
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
      key={id}
      selected={isHighlighted}
      {...getItemProps({ item: option })}
    >
      <span>
        <img src={listImage} className="movie-search-img-thumb" alt="#" />
      </span>
      <span>{listTitle}</span>
    </MenuItem>
  );
};

renderMenuItemChildren.propTypes = itemsProps;

const Items = ({
  search,
  loading,
  ...props
}) => (loading || Object.keys(search).length === 0
  ? null
  : search.map((option, index) => renderMenuItemChildren({
    option, index, ...props,
  })));

const FetchItems = withSearch()(Items);

const NavSearch = (props) => {
  const classes = useStyles();
  const { history, config } = props;

  return (
    <Downshift
      onChange={({ media_type, id }) => history.push(`/${media_type}/${id}`)}
      itemToString={item => (item ? item.name || item.title : '')}
    >
      {({
        getInputProps,
        getItemProps,
        isOpen,
        inputValue,
        selectedItem,
        highlightedIndex,
      }) => (
          <div className={classes.container}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>

            <TextField
              InputProps={{
                classes: {
                  root: classes.inputRoot,
                  input: classes.inputInput,
                },
                ...getInputProps({ placeholder: 'Search...' }),
              }}
            />
            {isOpen ? (
              <Paper className={classes.paper} component="ul">
                <FetchItems
                  query={inputValue}
                  selectedItem={selectedItem}
                  highlightedIndex={highlightedIndex}
                  getItemProps={getItemProps}
                  config={config}
                />
              </Paper>
            ) : null}
          </div>
        )}
    </Downshift>
  );
};

export default withRouter(NavSearch);

NavSearch.propTypes = propTypes;
