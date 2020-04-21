import { graphql } from 'react-apollo';
import React from 'react';
import { shallow } from 'enzyme';
import withTopPeople from '.';

jest.mock('react-apollo', () => ({
  ...jest.requireActual('react-apollo'),
  graphql: jest.fn(),
}));

describe('Queries/withTopPeople', () => {
  graphql.mockImplementation((_, config) => {
    const ownProps = { query: 'page=1' };
    const props = config.props({
      data: {
        topPeople: [
          {
            id: 1,
            name: 'name',
            profile_path: 'path/to/image',
            popularity: 1,
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
  const Component = withTopPeople()(MockComponent);

  it('should render as expected', () => {
    const render = shallow(Component);
    expect(render).toMatchSnapshot();
  });
});
