import { graphql } from 'react-apollo';
import React from 'react';
import { shallow } from 'enzyme';
import withMovie from '.';

jest.mock('react-apollo', () => ({
  ...jest.requireActual('react-apollo'),
  graphql: jest.fn(),
}));

describe('Queries/withMovie', () => {
  graphql.mockImplementation((_, config) => {
    const ownProps = { movieId: 1 };
    const props = config.props({
      data: {
        movie: {
          id: 1,
        },
        loading: true,
      },
      ownProps,
    });
    const options = config.options(ownProps);
    return jest.fn(Mock => <Mock options={options} {...props} />);
  });

  const MockComponent = props => ({ ...props });
  const Component = withMovie()(MockComponent);

  it('should render as expected', () => {
    const render = shallow(Component);
    expect(render).toMatchSnapshot();
  });
});
