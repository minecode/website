import React, { Component } from 'react';
import ReactDOM from "react-dom";
import ReactMarkdown from "react-markdown";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      comments: []
    };
  }

  async componentDidMount() {
    var authorizationBasic = window.btoa(process.env.REACT_APP_APIKEY);
    var header = new Headers();
    header.set('Authorization', 'Basic ' + authorizationBasic)
    Promise.all([
        fetch(
          "https://api.github.com/repos/minecode/minecode.github.io/issues/" +
          this.props.match.params.id, {
            method: 'GET',
            headers: header
          }),
        fetch(
          "https://api.github.com/repos/minecode/minecode.github.io/issues/" +
          this.props.match.params.id + '/comments', {
            method: 'GET',
            headers: header
          })
      ])
      .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
      .then(([data1, data2]) => {
        this.setState({
          data: data1,
          comments: data2
        })
      })
  }

  getPostsList = () => {
    let data = this.state.data;
    if (
      data.state === "closed" &&
      data.title.split("[")[1].split("]")[0] === "POST"
    ) {
      this.getCommentsList(data.user.login);
      var date = new Date(data.created_at);
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      date = monthNames[date.getMonth()] + ", " + date.getFullYear();
      var info = document.createElement("h5");
      info.append("Posted on " + date);
      info.append(" by " + data.user.login);
      var githubLink = document.createElement("a");
      githubLink.setAttribute("class", "mt-3 mb-4 btn btn-sm");
      githubLink.setAttribute("href", "https://github.com/" + data.user.login);
      githubLink.setAttribute("target", "_blank");
      githubLink.setAttribute("style", 'color: #000"');
      var githubLogo = document.createElement("img");
      githubLogo.setAttribute("src", "/images/github.svg");
      githubLogo.setAttribute("alt", "Github");
      githubLogo.setAttribute("width", "24");
      githubLogo.setAttribute("height", "24");
      githubLink.append(githubLogo);
      info.append(githubLink);
      document.getElementById("infoPost").append(info);
      var userLogo = document.createElement("img");
      userLogo.setAttribute("class", "rounded-circle");
      userLogo.setAttribute("src", data.user.avatar_url);
      userLogo.setAttribute("alt", "User");
      userLogo.setAttribute("width", "35");
      userLogo.setAttribute("height", "35");
      document.getElementById("userLogo").append(userLogo);
      var div = document.getElementById("title");
      var h1 = document.createElement("h1");
      h1.setAttribute("class", "display-2");
      var text = document.createTextNode(data.title.split(/\[\w*\] /)[1]);
      h1.append(text);
      div.append(h1);
      div = document.getElementById("post");
      var p = document.createElement("div");
      text = document.createTextNode(data.body);
      p.append(text);
      div.append(p);
    }
  };

  getCommentsList = user => {
    this.state.comments.forEach(data => {
      var div1 = document.createElement("div");
      div1.setAttribute("class", "col-1 text-center");
      var userLogo = document.createElement("img");
      userLogo.setAttribute("class", "m-3 rounded-circle");
      userLogo.setAttribute("src", data.user.avatar_url);
      userLogo.setAttribute("alt", "User");
      userLogo.setAttribute("width", "35");
      userLogo.setAttribute("height", "35");
      div1.append(userLogo);

      var div11 = document.createElement("div");
      div11.setAttribute("class", "col-11");
      var all = document.createElement("div");
      all.setAttribute("class", "card mt-3 mb-3");

      var allInfo = document.createElement("div");
      allInfo.setAttribute("class", "card-header");

      var infoCommentDiv = document.createElement("div");
      var date = new Date(data.created_at);
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      date = monthNames[date.getMonth()] + ", " + date.getFullYear();
      var info = document.createElement("h5");
      info.append("Posted on " + date);
      info.append(" by " + data.user.login);
      infoCommentDiv.append(info);
      allInfo.append(infoCommentDiv);

      var contentComment = document.createElement("div");
      contentComment.setAttribute('class', 'card-body')
      ReactDOM.render(<ReactMarkdown source={data.body} />, contentComment)
      all.append(allInfo);
      all.append(contentComment);
      div11.append(all);
      if (data.user.login === user) {
        document.getElementById("comments").append(div1);
        document.getElementById("comments").append(div11);
      } else {
        document.getElementById("comments").append(div11);
        document.getElementById("comments").append(div1);
      }
    });
  };

  componentDidUpdate() {
    this.getPostsList();
  }

  render() {
    return (
      <div className="container" id="content">
        <div
          className="pricing-header px-3 py-3 mx-auto text-center"
          id="title"
        ></div>
        <div className="pricing-header px-3 py-3 pb-md-4 mx-auto text-center">
          <div className="d-flex align-middle justify-content-center align-items-center">
            <div className="align-self-center p-2" id="userLogo"></div>
            <div className="align-self-center p-2" id="infoPost"></div>
          </div>
        </div>
        <div className="pt-md-5 pb-md-4 mx-auto text-center" id="post"></div>
        <div
          className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto row"
          id="comments"
        ></div>
      </div>
    );
  }
}

export default Post;
