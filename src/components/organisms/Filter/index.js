/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import { propTypes } from './propTypes';
import MyPager from '../../atoms/Pager';
import FilterGenres from '../../atoms/FilterGenres';
import useStyles from './styles';

const objectToQueryStr = paramsObj =>
  Object.keys(paramsObj)
    .map(
      key => `${encodeURIComponent(key)}=${encodeURIComponent(paramsObj[key])}`,
    )
    .join('&');

const initState = ({ params, release_year }) => ({
  page: parseInt(params.get('page'), 10) || 1,
  [release_year[0]]: params.get(release_year[0]) || new Date().getFullYear(),
  sort_by: params.get('sort_by') || 'popularity.desc',
  with_genres: params.get('with_genres') || '',
  'vote_average.gte': params.get('vote_average.gte') || 0,
});

const Filter = ({ query, media, genres, children, queryUpdate }) => {
  const classes = useStyles();
  const year = new Date().getFullYear();

  const params = new URLSearchParams(query);

  const release_year =
    media === 'tvs'
      ? ['first_air_date_year', 'first_air_date']
      : ['primary_release_year', 'primary_release_date'];

  const [state, setState] = useState(initState({ params, release_year }));

  useEffect(() => {
    const runQuery = () => {
      const strquery = objectToQueryStr(state);
      queryUpdate(strquery);
    };

    runQuery();
  }, [state, queryUpdate]);

  const sumYear = year - 1900;
  const yearOptions = Array(sumYear)
    .fill()
    .map((_, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <MenuItem key={i} value={year - i}>
        {year - i}
      </MenuItem>
    ));

  const handleChange = e => {
    const val = e.target.value;
    const option = e.target.name;
    setState({ ...state, [option]: val, page: 1 });
  };

  const handleGenresChange = g =>
    setState({ ...state, with_genres: g, page: 1 });

  const handlePageSelect = page => {
    if (page > 0) {
      setState({ ...state, page });
    }
  };

  const { sort_by, with_genres, page } = state;
  return (
    <div className={classes['filter-wrapper']}>
      <form>
        <FormControl variant="outlined" className="filter-element-wrapper">
          <InputLabel htmlFor="shortby">Sort By</InputLabel>
          <Select
            id="shortby"
            placeholder="select"
            onChange={handleChange}
            value={sort_by}
            name="sort_by"
            input={<OutlinedInput labelWidth={53} id="shortby" />}
          >
            <MenuItem value="popularity.desc">Popularity Descending</MenuItem>
            <MenuItem value="popularity.asc">Popularity Ascending</MenuItem>
            <MenuItem value="vote_average.desc">Rating Descending</MenuItem>
            <MenuItem value="vote_average.asc">Rating Ascending</MenuItem>
            <MenuItem value={`${release_year[1]}.desc`}>
              Release Date Descending
            </MenuItem>
            <MenuItem value={`${release_year[1]}.asc`}>
              Release Date Ascending
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl className="filter-element-wrapper" variant="outlined">
          <InputLabel>Year</InputLabel>
          <Select
            placeholder="select"
            onChange={handleChange}
            // eslint-disable-next-line react/destructuring-assignment
            value={state[release_year[0]]}
            name={release_year[0]}
            input={<OutlinedInput labelWidth={35} id="year" />}
          >
            <MenuItem value="null">None</MenuItem>
            {yearOptions}
          </Select>
        </FormControl>
        <FilterGenres
          genres={genres}
          onChange={handleGenresChange}
          value={with_genres}
        />
        <FormControl className="filter-element-wrapper" variant="outlined">
          <InputLabel>Average vote</InputLabel>
          <Select
            name="vote_average.gte"
            placeholder="select"
            onChange={handleChange}
            // eslint-disable-next-line react/destructuring-assignment
            value={state['vote_average.gte']}
            input={<OutlinedInput labelWidth={93} id="vote" />}
            fullWidth
          >
            <MenuItem value="0">Greater than...</MenuItem>
            <MenuItem value="9">9</MenuItem>
            <MenuItem value="8">8</MenuItem>
            <MenuItem value="7">7</MenuItem>
            <MenuItem value="6">6</MenuItem>
            <MenuItem value="5">5</MenuItem>
            <MenuItem value="4">4</MenuItem>
            <MenuItem value="3">3</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="1">1</MenuItem>
          </Select>
        </FormControl>
      </form>
      <MyPager page={page} handlePageSelect={handlePageSelect} />
      {children}

      <MyPager page={page} handlePageSelect={handlePageSelect} />
    </div>
  );
};

Filter.propTypes = propTypes;

export default Filter;
