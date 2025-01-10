import React, { Component } from "react";
import "./ContentRating.css";

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      dislikes: 0,
      totalRating: 0,
    };
    this.handleLike = this.handleLike.bind(this);
    this.handleDislike = this.handleDislike.bind(this);
  }

  handleLike() {
    this.setState((prevState) => ({
      likes: prevState.likes + 1,
      totalRating: prevState.totalRating + 1,
    }));
  }

  handleDislike() {
    this.setState((prevState) => ({
      dislikes: prevState.dislikes + 1,
      totalRating: prevState.totalRating + 1,
    }));
  }

  render() {
    return (
      <div className="content-rating">
        <p>Text</p>
        <div className="rating-buttons">
          <button className="like-button" onClick={this.handleLike}>
            いいね ({this.state.likes})
          </button>
          <button className="dislike-button" onClick={this.handleDislike}>
            嫌い ({this.state.dislikes})
          </button>
          <p>合計評価数: {this.state.totalRating}</p>
        </div>
      </div>
    );
  }
}

export default ContentRating;
