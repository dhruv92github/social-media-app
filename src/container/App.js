import React, { Component } from "react";
import {  Route, withRouter, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "./App.css";
import Feed from "../components/Feed";
import PostDetails from "../components/PostDetails";
import { getPosts, getPostsDetails ,getSearchedPost} from "../actions";

class App extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    return (
      
        <div className="app">
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Feed
                  posts={this.props.posts}
                  getPostsDetails={this.props.getPostsDetails}
                  getSearchedPost={this.props.getSearchedPost}
                />
              )}
            />
            <Route
             exact path={'/posts/:id'}
              render={() => (
                <PostDetails postDetails={this.props.postDetails} />
              )}
            />
          </Switch>
        </div>
     
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    posts: state.posts,
    postDetails: state.postDetails
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: bindActionCreators(getPosts, dispatch),
    getPostsDetails: bindActionCreators(getPostsDetails, dispatch),
    getSearchedPost:bindActionCreators(getSearchedPost,dispatch)
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));
