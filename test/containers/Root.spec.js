import React from 'react';
import { shallow } from 'enzyme';
import Root from '../../src/containers/Root';

// Original tests
// describe('(Container) Root', () => {
  // it('renders as a <div>', () => {
    // const wrapper = shallow(<Root />);
    // expect(wrapper.type()).to.eql('div');
  // });

  // it('has style with height 100%', () => {
    // const wrapper = shallow(<Root />);
    // const expectedStyles = {
      // height: '100%',
      // background: '#333'
    // }
    // expect(wrapper.prop('style')).to.eql(expectedStyles);
  // });

  // it('contains a header explaining the app', () => {
    // const wrapper = shallow(<Root />);
    // expect(wrapper.find('.welcome-header')).to.have.length(1);
  // });
// });

// Refactored tests
describe('(Container) Root', () => {
  const wrapper = shallow(<Root />);

  it('renders as a <div>', () => {
    expect(wrapper.type()).to.eql('div');
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
