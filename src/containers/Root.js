import React, { Component } from 'react';
import CommentList from 'components/CommentList';

const styles = {
  height: '100%',
  background: '#99f'
}

const props = {
  onMount: () => {},
  isActive: false
}


class Root extends Component {
  render() {
    return (
      <div style={styles}>
        <h1 className='welcome-header'>Welcome to testing React!</h1>
        <h4>Comments:</h4>
        <CommentList {...props} />
      </div>
    )
  }
}

export default Root;
