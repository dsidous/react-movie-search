import React from 'react';
import { shallow } from 'enzyme';
import ModalVideo from 'react-modal-video';

import PlayTrailer from '.';

const mockProps = {
  video: {
    key: 'somekey',
  },
};

describe('Atoms/PlayTrailer', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<PlayTrailer {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should open onClick', () => {
    const wrapper = shallow(<PlayTrailer {...mockProps} />);
    const modal = wrapper.find(ModalVideo);

    wrapper.find('.play-trailer').simulate('click');
    expect(wrapper.find(ModalVideo).props().isOpen).toBe(true);

    modal.simulate('close');
    expect(wrapper.find(ModalVideo).props().isOpen).toBe(false);
  });
});
