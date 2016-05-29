import React from 'react';
import { shallow } from 'enzyme';
import Root from '../../src/containers/Root';

describe('(Container) Root', () => {
  const wrapper = shallow(<Root />);

  it('renders as a <div>', () => {
    expect(wrapper.type()).to.equal('div');
  });

  it('has style with height 100%, background #99f', () => {
    const expectedStyles = {
      height: '100%',
      background: '#99f'
    }
    expect(wrapper.prop('style')).to.eql(expectedStyles);
  });

  it('contains a header explaining the app', () => {
    expect(wrapper.find('.welcome-header')).to.have.length(1);
  });
});
