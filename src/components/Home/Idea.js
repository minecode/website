import React, { Component } from 'react';
import { addIssue } from '../Utils'

class Idea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  addIssue = (issue) => {
    var card = document.createElement('div');
    card.setAttribute('class', 'card mb-4 box-shadow');
    var header = document.createElement('div');
    header.setAttribute('class', 'card-header');
    var title = document.createElement('h5');
    title.setAttribute('class', 'my-0 font-weight-normal');
    var text = document.createTextNode(issue.title.split(/\[\w*\] /)[1]);
    title.append(text);
    header.append(title);
    var body = document.createElement('div');
    body.setAttribute('class', 'card-body');
    var date = document.createElement('p');
    date.setAttribute('style', 'opacity:0.5; font-size:12px')
    text = document.createTextNode(issue.created_at.substring(0, 10));
    date.append(text);
    body.append(date);
    var description = document.createElement('div');
    description.setAttribute('class', 'mt-3 mb-3');
    text = document.createTextNode(issue.body);
    description.append(text);
    body.append(description);
    var status = document.createElement('div');
    text = document.createTextNode(issue.state.charAt(0).toUpperCase() + issue.state.slice(1))
    if (issue.state === 'open')
      status.setAttribute('class', 'mt-3 mb-4 btn btn-sm btn-success');
    else
      status.setAttribute('class', 'mt-3 mb-4 btn btn-sm btn-danger');
    status.append(text);
    body.append(status);
    var labels = document.createElement('div');
    labels.setAttribute('class', 'text-center');
    issue.labels.forEach(label => {
      var lab = document.createElement('div');
      lab.setAttribute('class', 'm-1 btn btn-sm btn-outline-primary');
      text = document.createTextNode(label.name);
      lab.append(text);
      labels.append(lab);
    });
    body.append(labels);
    card.append(header);
    card.append(body);
    return card;
  }

  getIssuesList = () => {
    var card_deck_issue = document.createElement('div');
    card_deck_issue.setAttribute('class', 'card-deck mb-3 text-center');
    var maxIssue = 6;
    var nIssue = 0;
    this.state.data.forEach(issue => {
      var isPost = false;
      issue.labels.forEach(label => {
        if (label.name === 'Post') {
          isPost = true;
          return;
        }
      });
      if (nIssue === maxIssue)
        return;
      else if (!isPost && nIssue < maxIssue) {
        var card = addIssue(issue)
        card_deck_issue.append(card);
        nIssue++;
      }
    })
    document.getElementById('issues_list').append(card_deck_issue)
  }

  async componentDidMount() {
      var authorizationBasic = window.btoa('97b2a912e67b0ae98cd5:e644319491835bcaa1dd08693df8185e6c950e6a');
      var header = new Headers();
      header.set('Authorization', 'Basic ' + authorizationBasic)
      fetch('https://api.github.com/repos/minecode/minecode.github.io/issues', {
          method: 'GET',
          headers: header
        })
      .then(res => res.json())
      .then(data => {
        this.setState({ data: data })
      })
  }

  componentDidUpdate() {
      this.getIssuesList()
  }

  render() {
    return (
      <div className="container">
        <div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center" id="ideas">
          <h1 className="display-4">Ideas</h1>
          <p className="lead">Status of MineCode</p>
        </div>
        <div id="issues_list">
        </div>
        <div className="text-center">
          <a type="button" className="mt-3 mb-4 btn btn-sm btn-outline-primary" href="/ideas">
            View more
          </a>
        </div>
      </div>
    );
  }
}

export default Idea;
