import { graphql } from 'react-apollo';
import React from 'react';
import { shallow } from 'enzyme';
import withConfig from '.';

jest.mock('react-apollo', () => ({
  ...jest.requireActual('react-apollo'),
  graphql: jest.fn(),
}));

describe('Queries/withConfig', () => {
  graphql.mockImplementation((_, config) => {
    const ownProps = {};
    const props = config.props({
      data: {
        config: {
          images: {
            base_url: 'path/to/image',
            secure_base_url: 'path/to/image',
            backdrop_sizes: ['1', '2', '3', '4'],
            poster_sizes: ['1', '2', '3', '4'],
            profile_sizes: ['1', '2', '3', '4'],
            still_sizes: ['1', '2', '3', '4'],
          },
        },
        loading: true,
      },
      ownProps,
    });
    const options = config.options(ownProps);
    return jest.fn(Mock => <Mock options={options} {...props} />);
  });

  const MockComponent = props => ({ ...props });
  const Component = withConfig()(MockComponent);

  it('should render as expected', () => {
    const render = shallow(Component);
    expect(render).toMatchSnapshot();
  });
});
