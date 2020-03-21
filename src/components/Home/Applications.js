import React, { Component } from 'react';

class Applications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  getApplicationsList() {
    var applications_list = document.getElementById('applications_list');
    var card_deck_issue = document.createElement('div');
    card_deck_issue.setAttribute('class', 'card-deck mb-3 text-center');
    this.state.data.forEach(application => {
      if (application.topic.names.includes('production')) {
        var card = document.createElement('div');
        card.setAttribute('class', 'card mb-4 box-shadow');
        var header = document.createElement('div');
        header.setAttribute('class', 'card-header');
        var title = document.createElement('h5');
        title.setAttribute('class', 'my-0 font-weight-normal');
        var text = document.createTextNode(application.name);
        title.append(text);
        header.append(title);
        var body = document.createElement('div');
        body.setAttribute('class', 'card-body');
        var description = document.createElement('div');
        description.setAttribute('class', 'mt-3 mb-3');
        text = document.createTextNode(application.description);
        description.append(text);
        body.append(description);
        var status = document.createElement('div');
        status.setAttribute('class', 'mt-3 mb-4');
        var a = document.createElement('a')
        a.setAttribute('target', '_blank')
        a.setAttribute('rel', 'noopener noreferrer')
        a.setAttribute('href', '/privacy_policy.html')
        var b = document.createElement('b')
        var textPP = document.createTextNode('Privacy policy')
        b.append(textPP)
        a.append(b)
        status.append(a);
        body.append(status);
        var labels = document.createElement('div');
        labels.setAttribute('class', 'text-center');
        var lab = document.createElement('a');
        lab.setAttribute('class', 'mt-3 mb-4 btn btn-sm btn-outline-primary');
        lab.setAttribute('href', application.homepage)
        lab.setAttribute('target', '_blank')
        lab.setAttribute('rel', 'nooper noreferrer')
        lab.setAttribute('type', 'button')
        var img = document.createElement('img')
        img.setAttribute('src', 'images/google-play-store.svg')
        img.setAttribute('alt', 'PlayStore')
        img.setAttribute('width', '24')
        img.setAttribute('height', '24')
        lab.append(img)
        var text = document.createTextNode('Get app');
        lab.append(text);
        labels.append(lab);
        body.append(labels);
        card.append(header);
        card.append(body);
        card_deck_issue.append(card)
      }
    })
    applications_list.append(card_deck_issue);
  }

  async componentDidMount() {
    var authorizationBasic = window.btoa('97b2a912e67b0ae98cd5:e644319491835bcaa1dd08693df8185e6c950e6a');
    var header = new Headers();
    header.set('Authorization', 'Basic ' + authorizationBasic)
    fetch('https://api.github.com/orgs/minecode/repos', {
      method: 'GET',
      headers: header
    })
    .then(res => res.json())
    .then(data => {
      var count = 0
      header.set('accept', 'application/vnd.github.mercy-preview+json')
      data.forEach(repo => {
        fetch('https://api.github.com/repos/minecode/' + repo.name + '/topics', {
          method: 'GET',
          headers: header
        })
        .then(res => res.json())
        .then(data2 => {
          var temp = 0
          data.forEach(element => {
            if (element.name === repo.name) {
              data[count].topic = data2
            }
            temp++
          })
          count++
          if (data.length === count) {
            this.setState({
              data: data
            })
          }
        })
      })
    })
  }

  componentDidUpdate() {
    this.getApplicationsList()
  }
  render() {
    return (
      <div className="container">
          <div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center" id="ideas">
              <h1 className="display-4">Applications</h1>
              <p className="lead">Application center, developed by MineCode.</p>
          </div>
          <div id="applications_list">
          </div>
      </div>
    );
  }
}

export default Applications;
