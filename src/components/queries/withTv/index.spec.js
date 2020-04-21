import { graphql } from 'react-apollo';
import React from 'react';
import { shallow } from 'enzyme';
import withTv from '.';

jest.mock('react-apollo', () => ({
  ...jest.requireActual('react-apollo'),
  graphql: jest.fn(),
}));

describe('Queries/withTv', () => {
  graphql.mockImplementation((_, config) => {
    const ownProps = { tvId: 1 };
    const props = config.props({
      data: {
        tv: {
          name: 'name',
        },
        loading: true,
      },
      ownProps,
    });
    const options = config.options(ownProps);
    return jest.fn(Mock => <Mock options={options} {...props} />);
  });

  const MockComponent = props => ({ ...props });
  const Component = withTv()(MockComponent);

  it('should render as expected', () => {
    const render = shallow(Component);
    expect(render).toMatchSnapshot();
  });
});
