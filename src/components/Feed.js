import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import PostList from "./PostList";

export default class Feed extends Component {
  getPostsDetails = id => {
    console.log(id);
    this.props.getPostsDetails(id);
  };

  render() {
    return (
      <div>
        <Header getSearchedPost={this.props.getSearchedPost} />
        <PostList
          {...this.props.posts}
          getPostsDetails={this.getPostsDetails}
        />
      </div>
    );
  }
}
