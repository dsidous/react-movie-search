import { graphql } from 'react-apollo';
import React from 'react';
import { shallow } from 'enzyme';
import withNowPlayingMovies from '.';

jest.mock('react-apollo', () => ({
  ...jest.requireActual('react-apollo'),
  graphql: jest.fn(),
}));

describe('Queries/withNowPlayingMovies', () => {
  graphql.mockImplementation((_, config) => {
    const ownProps = { query: 'page=1' };
    const props = config.props({
      data: {
        nowplaying: [
          {
            id: 1,
            backdrop_path: 'path/to/image',
            poster_path: 'path/to/image',
            title: 'title',
            release_date: '01.01.2010',
            vote_average: 1,
            genre_names: [
              {
                genre_name: 'genre',
              },
            ],
          },
        ],
        loading: true,
      },
      ownProps,
    });
    const options = config.options(ownProps);
    return jest.fn(Mock => <Mock options={options} {...props} />);
  });

  const MockComponent = props => ({ ...props });
  const Component = withNowPlayingMovies()(MockComponent);

  it('should render as expected', () => {
    const render = shallow(Component);
    expect(render).toMatchSnapshot();
  });
});
