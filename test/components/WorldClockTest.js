import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WorldClock from '../../src/components/WorldClock';

configure({ adapter: new Adapter() });

describe('WorldClock', () => {
  let wrapper;

  const render = () => shallow(<WorldClock />);

  it('Should have initial state values set', () => {
    wrapper = render();
    expect(wrapper.instance().state.format).to.equal('HH:mm:ss');
    expect(wrapper.instance().state.ticking).to.be.true;
    expect(wrapper.instance().state.timezone).to.equal('Europe/London');
  });

  describe('updateTimeZone', () => {
    it('Should set the state', () => {
      const event = {target: { value: 'Asia/Tokyo'}};
      wrapper = render();
      expect(wrapper.instance().state.timezone).to.equal('Europe/London');
      wrapper.instance().updateTimeZone(event);
      expect(wrapper.instance().state.timezone).to.equal('Asia/Tokyo');
    });
  });
});
