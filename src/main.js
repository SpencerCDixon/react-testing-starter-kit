import React, { Component } from 'react';
import { render } from 'react-dom';
import CommentContainer from 'containers/CommentContainer';

class Root extends Component {
  render() {
    return (
      <div style={{height: '100%'}}>
        <CommentContainer />
      </div>
    )
  }
}


render(<Root />, document.getElementById('root'));
