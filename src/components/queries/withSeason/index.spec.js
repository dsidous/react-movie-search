import { graphql } from 'react-apollo';
import React from 'react';
import { shallow } from 'enzyme';
import withSeason from '.';

jest.mock('react-apollo', () => ({
  ...jest.requireActual('react-apollo'),
  graphql: jest.fn(),
}));

describe('Queries/withSeason', () => {
  graphql.mockImplementation((_, config) => {
    const ownProps = { tvId: 1, season: 1 };
    const props = config.props({
      data: {
        tvSeason: {
          name: 'name',
          air_date: '01.01.2010',
          poster_path: 'path/to/image',
          episodes: [
            {
              name: 'name',
              air_date: '01.01.2010',
              episode_number: 1,
              overview: 1,
              still_path: 'path/to/image',
            },
          ],
        },
        loading: true,
      },
      ownProps,
    });
    const options = config.options(ownProps);
    return jest.fn(Mock => <Mock options={options} {...props} />);
  });

  const MockComponent = props => ({ ...props });
  const Component = withSeason()(MockComponent);

  it('should render as expected', () => {
    const render = shallow(Component);
    expect(render).toMatchSnapshot();
  });
});
