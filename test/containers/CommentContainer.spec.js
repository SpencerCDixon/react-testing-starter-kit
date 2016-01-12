import React from 'react';
import { shallow, describeWithDOM, mount, spyLifecycle } from 'enzyme';
import CommentContainer from '../../src/containers/CommentContainer';

describe('expect to be available', () => {
  it('is there', () => {
    expect(true).to.be.true;
  });
});

describe('(Component) CommentContainer', () => {
  it('renders as a div', () => {
    const wrapper = shallow(<CommentContainer />);
    const spy = sinon.spy();

    expect(wrapper.type()).to.eql('div');
  });

  describeWithDOM('Lifecycle methods', () => {
    it('calls component did mount', () => {
      spyLifecycle(CommentContainer);
      mount(<CommentContainer />);

      expect(
        CommentContainer.prototype.componentDidMount.calledOnce
      ).to.be.true;
    });
  });
});
