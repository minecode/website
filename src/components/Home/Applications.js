import React, { Component } from 'react';
import { titleCase } from '../Utils'

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
        var text = document.createTextNode(titleCase(application.name));
        title.append(text);
        header.append(title);
        var body = document.createElement('div');
        body.setAttribute('class', 'card-body');

        if (application.minecode_settings !== undefined) {
          if (application.minecode_settings.image !== null) {
            var img = document.createElement('img')
            img.setAttribute('width', 96)
            img.setAttribute('height', 96)
            img.setAttribute('src', 'https://raw.githubusercontent.com/minecode/' + application.name + '/master/' + application.minecode_settings.image)
            body.append(img)
          }
        }

        var description = document.createElement('div');
        description.setAttribute('class', 'mt-3 mb-3');
        text = document.createTextNode(application.description);
        description.append(text);
        body.append(description);
        var homepageAdded = false
        if (application.homepage !== null) {
          var labels = document.createElement('div');
          labels.setAttribute('class', 'text-center');
          var lab = document.createElement('a');
          lab.setAttribute('class', 'mt-3 mb-4 btn btn-sm btn-outline-primary');
          lab.setAttribute('href', application.homepage)
          lab.setAttribute('target', '_blank')
          lab.setAttribute('rel', 'nooper noreferrer')
          lab.setAttribute('type', 'button')
          img = document.createElement('img')
          img.setAttribute('src', '/images/web-page.svg')
          img.setAttribute('alt', 'Webpage')
          img.setAttribute('width', '24')
          img.setAttribute('height', '24')
          lab.append(img)
          text = document.createTextNode(' Go to website');
          lab.append(text);
          labels.append(lab);
          body.append(labels);
          homepageAdded = true
        }
        if (application.minecode_settings !== undefined) {
          if (application.minecode_settings.link_mobile !== null) {
            labels = document.createElement('div');
            labels.setAttribute('class', 'text-center');
            lab = document.createElement('a');
            lab.setAttribute('class', 'mt-3 mb-4 btn btn-sm btn-outline-primary');
            if (application.minecode_settings.link_mobile.includes('https://') || application.minecode_settings.link_mobile.includes('http://'))
              lab.setAttribute('href', application.minecode_settings.link_mobile)
            else
              lab.setAttribute('href', 'https://' + application.minecode_settings.link_mobile)
            lab.setAttribute('target', '_blank')
            lab.setAttribute('rel', 'nooper noreferrer')
            lab.setAttribute('type', 'button')
            img = document.createElement('img')
            img.setAttribute('src', '/images/google-play-store.svg')
            img.setAttribute('alt', 'PlayStore')
            img.setAttribute('width', '24')
            img.setAttribute('height', '24')
            lab.append(img)
            text = document.createTextNode(' Get app');
            lab.append(text);
            labels.append(lab);
            body.append(labels);
          }
          if (application.minecode_settings.link_website !== null && homepageAdded === false) {
            labels = document.createElement('div');
            labels.setAttribute('class', 'text-center');
            lab = document.createElement('a');
            lab.setAttribute('class', 'mt-3 mb-4 btn btn-sm btn-outline-primary');
            if (application.minecode_settings.link_website.includes('https://') || application.minecode_settings.link_website.includes('http://'))
              lab.setAttribute('href', application.minecode_settings.link_website)
            else 
              lab.setAttribute('href', 'https://' + application.minecode_settings.link_website)
            lab.setAttribute('target', '_blank')
            lab.setAttribute('rel', 'nooper noreferrer')
            lab.setAttribute('type', 'button')
            img = document.createElement('img')
            img.setAttribute('src', '/images/web-page.svg')
            img.setAttribute('alt', 'Webpage')
            img.setAttribute('width', '24')
            img.setAttribute('height', '24')
            lab.append(img)
            text = document.createTextNode(' Go to website');
            lab.append(text);
            labels.append(lab);
            body.append(labels);
          }
        }
        var status = document.createElement('div');
        status.setAttribute('class', 'mt-3 mb-4');
        var a = document.createElement('a')
        a.setAttribute('target', '_blank')
        a.setAttribute('rel', 'noopener noreferrer')
        a.setAttribute('href', '/privacyPolicy/' + application.name)
        var b = document.createElement('b')
        var textPP = document.createTextNode('Privacy policy')
        b.append(textPP)
        a.append(b)
        status.append(a);
        body.append(status);
        card.append(header);
        card.append(body);
        card_deck_issue.append(card)
      }
    })
    applications_list.append(card_deck_issue);
  }

  async componentDidMount() {
    var authorizationBasic = window.btoa(process.env.REACT_APP_APIKEY);
    var header = new Headers();
    header.set('Authorization', 'Basic ' + authorizationBasic)
    fetch('https://api.github.com/orgs/minecode/repos', {
      method: 'GET',
      headers: header
    })
    .then(res => res.json())
    .then(data => {
      var count = 0
      header.set('Accept', 'application/vnd.github.mercy-preview+json')
      data.forEach(repo => {
        Promise.all([
          fetch('https://api.github.com/repos/minecode/' + repo.name + '/topics', {
            method: 'GET',
            headers: header
          }),
          fetch('https://api.github.com/repos/minecode/' + repo.name + '/contents/minecode_settings.json?ref=master', {
            method: 'GET',
            headers: header,
          })
        ])
        .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
        .then(([data2, data3]) => {
          if (data3.content !== undefined) {
            data3.content = JSON.parse(atob(data3.content))
          }
          var temp = 0
          data.forEach(element => {
            if (element.name === repo.name) {
              data[temp].topic = data2
              data[temp].minecode_settings = data3.content
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
