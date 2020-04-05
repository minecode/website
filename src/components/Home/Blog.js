import React, { Component } from 'react';
import { addPost } from '../Utils'
class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  getPostsList = () => {
    var card_deck_post = document.createElement('div');
    card_deck_post.setAttribute('class', 'card-deck mb-3 text-center');
    var maxPost = 3;
    var nPost = 0;
    this.state.data.forEach(issue => {
      var isPost = false;
      issue.labels.forEach(label => {
        if (label.name === 'Post') {
          isPost = true;
          return;
        }
      });
      if (nPost === maxPost)
        return;
      else if (isPost && nPost < maxPost) {
        var card = addPost(issue)
        card_deck_post.append(card);
        nPost++;
      }
    })
    document.getElementById('posts_list').append(card_deck_post)

  }

  async componentDidMount() {
    var authorizationBasic = window.btoa(process.env.REACT_APP_APIKEY);
    var header = new Headers();
    header.set('Authorization', 'Basic ' + authorizationBasic)
    fetch('https://api.github.com/repos/minecode/minecode.github.io/issues?state=closed', {
      method: 'GET', headers: header
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
        <div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center" id="posts">
        <h1 className="display-4">Blog</h1>
        <p className="lead">Minecode Posts</p>
        </div>
        <div id="posts_list">
        </div>
        <div className="text-center">
        <a type="button" className="mt-3 mb-4 btn btn-sm btn-outline-primary" href="/blog">
            View more
        </a>
        </div>
    </div>
    );
  }
}

export default Blog;
