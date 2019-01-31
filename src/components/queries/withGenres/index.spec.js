import { graphql } from 'react-apollo';
import React from 'react';
import { shallow } from 'enzyme';
import withGenres from '.';

describe('Queries/withGenres', () => {
  graphql.mockImplementation((query, config) => {
    const ownProps = { memberId: 1234, ssn: 123456 };
    const props = config.props({
      data: {
        genres: {
          id: 1,
          name: 'genrename',
        },
      },
      ownProps,
    });
    const options = config.options(ownProps);
    return jest.fn(Mock => <Mock options={options} {...props} />);
  });

  const MockComponent = props => ({ ...props });
  const Component = withGenres()(MockComponent);

  it('should render as expected', () => {
    const render = shallow(Component);
    expect(render).toMatchSnapshot();
  });
});
