import React, { Component } from 'react';
import { addPost } from './Utils'
class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  getPostsList = () => {
    var posts_list = document.getElementById('posts_list');
    var card_deck_post = document.createElement('div');
    card_deck_post.setAttribute('class', 'card-deck mb-3 text-center');
    this.state.data.forEach(issue => {
        issue.labels.forEach(label => {
            if (label.name === 'Post') {
                var card = addPost(issue)
                card_deck_post.append(card);
            }
        });
    })
    posts_list.append(card_deck_post)
  }

  async componentDidMount() {
    var authorizationBasic = window.btoa(process.env.REACT_APP_APIKey);
    var header = new Headers();
    header.set('Authorization', 'Basic ' + authorizationBasic)
    fetch('https://api.github.com/repos/minecode/minecode.github.io/issues?state=closed', {
      method: 'GET',
      headers: header
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          data: data
        })
      })
  }

  componentDidUpdate() {
    this.getPostsList()
  }

  render() {
    return (
<div className="container">
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center" id="posts">
            <h1 className="display-4">Blog</h1>
            <p className="lead">Minecode Posts</p>
        </div>
        <div id="posts_list">
        </div>
    </div>
    );
  }
}

export default Blog;
