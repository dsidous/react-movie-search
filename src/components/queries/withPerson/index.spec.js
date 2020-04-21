import { graphql } from 'react-apollo';
import React from 'react';
import { shallow } from 'enzyme';
import withPerson from '.';

jest.mock('react-apollo', () => ({
  ...jest.requireActual('react-apollo'),
  graphql: jest.fn(),
}));

describe('Queries/withPerson', () => {
  graphql.mockImplementation((_, config) => {
    const ownProps = { personId: 1 };
    const props = config.props({
      data: {
        person: {
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
  const Component = withPerson()(MockComponent);

  it('should render as expected', () => {
    const render = shallow(Component);
    expect(render).toMatchSnapshot();
  });
});
