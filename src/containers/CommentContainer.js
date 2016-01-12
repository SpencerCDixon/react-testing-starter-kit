import React, { Component } from 'react';

// const propTypes = {};

class CommentContainer extends Component {
  componentDidMount() {
    console.log('Component mounted...');
  }

  render() {
    return (
      <div>
        <h1>Write a comment:</h1>
      </div>
    )
  }
}

// CommentContainer.propTypes = propTypes;
export default CommentContainer;

