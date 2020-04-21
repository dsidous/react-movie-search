import { graphql } from 'react-apollo';
import React from 'react';
import { shallow } from 'enzyme';
import withTvGenres from '.';

jest.mock('react-apollo', () => ({
  ...jest.requireActual('react-apollo'),
  graphql: jest.fn(),
}));

describe('Queries/withTvGenres', () => {
  graphql.mockImplementation((_, config) => {
    const ownProps = {};
    const props = config.props({
      data: {
        genresTv: [
          {
            id: 1,
            name: 'genrename',
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
  const Component = withTvGenres()(MockComponent);

  it('should render as expected', () => {
    const render = shallow(Component);
    expect(render).toMatchSnapshot();
  });
});
