import React, { Component, PropTypes } from 'react';

const propTypes = {
  onMount: PropTypes.func.isRequired,
  isActive: PropTypes.bool
};

class CommentList extends Component {
  componentDidMount() {
    this.props.onMount();
  }

  render() {
    const { isActive } = this.props;
    const classes = isActive ? 'active-list' : 'inactive-list';

    return (
      <ul>
        <li> Comment One </li>
      </ul>
    )
  }
}

CommentList.propTypes = propTypes;
export default CommentList;

