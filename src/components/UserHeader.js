import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { fetchUser } from "../actions";
export class UserHeader extends Component {
  static propTypes = {
    userId: PropTypes.number.isRequired,
    // fetchUser: PropTypes.func,
    user: PropTypes.object
  };

  //   componentDidMount = () => {
  // this.props.fetchUser(this.props.userId);
  //   };

  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    }
    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.users.find(user => user.id === ownProps.userId)
});

const mapDispatchToProps = {
  //   fetchUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserHeader);
