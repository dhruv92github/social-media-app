import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Post from "./Post";
import Comments from "./Comments";
import { loadMoreComments } from "../actions";
import Header from "./Header";

class PostDetails extends Component {
  LoadMoreComments = () => {
    this.props.LoadMoreComments();
  };
  render() {
    console.log(this.props);
    const data = this.props.postDetails;
    return (
      <>
        <Header />
        <div className="container">
          {data.postsDetails.map(post => {
            return (
              <>
                <Post {...post} key={post.id} />
                {data.comments[0]
                  .slice(0, this.props.commentsToShow)
                  .map(comment => {
                    return (
                      <Comments
                        {...comment}
                        key={comment.id}
                        LoadMoreComments={this.props.LoadMoreComments}
                      />
                    );
                  })}
                <div className="container loadMoreBox">
                  <span id="loadComments" onClick={this.LoadMoreComments}>
                    Load more comments
                  </span>
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    commentsToShow: state.postDetails.commentsToShow
  };
};
const mapDispatchToProps = dispatch => {
  return {
    LoadMoreComments: bindActionCreators(loadMoreComments, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetails);
