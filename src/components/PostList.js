import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
class PostList extends Component {
  static propTypes = {
    fetchPosts: PropTypes.func
  };

  componentDidMount = () => {
    this.props.fetchPosts();
  };

  render() {
    console.log(this.props);
    return <div>PostList</div>;
  }
}

const mapStateToProps = state => ({ state });

const mapDispatchToProps = {
  fetchPosts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
// TODO: 6. Wiring up action creator
