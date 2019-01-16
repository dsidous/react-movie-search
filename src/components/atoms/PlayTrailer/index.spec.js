import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlayTrailer from '.';

Enzyme.configure({ adapter: new Adapter() });

describe('Atoms/PlayTrailer', () => {
  it('should render as expected', () => {
    const video = {
      key: 'somekey',
    };
    const render = shallow(<PlayTrailer video={video} />);

    expect(render).toMatchSnapshot();
  });
});
