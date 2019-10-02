import React, { Component } from "react";


class Feed extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="ui comments">
        <div class="comment">
          <a class="avatar"><img src="https://react.semantic-ui.com/images/avatar/small/steve.jpg" /></a>
          <div class="content">
            <a class="author">Steve Jobes</a>
            <div class="metadata"><div>2 days ago</div></div>
            <div class="text">Revolutionary!</div>
            <div class="actions"><a class="active">Reply</a></div>
            <form class="ui reply form">
              <div class="field"><textarea rows="3"></textarea></div>
              <button class="ui icon primary left labeled button">
                <i aria-hidden="true" class="edit icon"></i>
                Add Reply
        </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Feed;