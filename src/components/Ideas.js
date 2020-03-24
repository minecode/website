import React, { Component } from 'react';
import { addIssue } from './Utils'

class Ideas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataOpen: [],
            dataClose: []
        };
    }

    getIdeasOpenList = () => {
        var issues_list = document.getElementById('issues_list');
        var card_deck_issue = document.createElement('div');
        card_deck_issue.setAttribute('class', 'card-deck mb-3 text-center');
        var divText = document.createElement('div')
        divText.setAttribute('class', 'pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center')
        var h5 = document.createElement('h5')
        var text2 = document.createTextNode('Open')
        h5.append(text2)
        divText.append(h5)
        issues_list.append(divText)
        this.state.dataOpen.forEach(issue => {
            var isPost = false;
            var li = document.createElement('p')
            var text = document.createTextNode(issue.title.split(/\[\w*\] /)[1])
            li.append(text)
            var added = false
            issue.labels.forEach(label => {
                if (label.name === 'Post') {
                    isPost = true;
                }
                if (label.name === 'In progress') {
                    document.getElementById('issueInProgressList').append(li)
                    added = true
                }
            });
            if (issue.state === 'open') {
                if (!added)
                    document.getElementById('issueOpenList').append(li)
            } else {
                if (!added)
                    document.getElementById('issueDoneList').append(li)
            }
            if (!isPost) {
                var card = addIssue(issue)
                card_deck_issue.append(card);
            }
        })
        issues_list.append(card_deck_issue);
        divText = document.createElement('div')
        divText.setAttribute('class', 'pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center')
        h5 = document.createElement('h5')
        text2 = document.createTextNode('Closed')
        h5.append(text2)
        divText.append(h5)
        issues_list.append(divText)
    }

    getIdeasCloseList = () => {
        var issues_list = document.getElementById('issues_list');
        var card_deck_issue = document.createElement('div');
        card_deck_issue.setAttribute('class', 'card-deck mb-3 text-center');
        this.state.dataClose.forEach(issue => {
            var isPost = false;
            var li = document.createElement('p')
            var text = document.createTextNode(issue.title.split(/\[\w*\] /)[1])
            li.append(text)
            var added = false
            issue.labels.forEach(label => {
                if (label.name === 'Post') {
                    isPost = true;
                }
                if (label.name === 'In progress') {
                    document.getElementById('issueInProgressList').append(li)
                    added = true
                }
            });
            if (issue.state === 'open') {
                if (!added)
                    document.getElementById('issueOpenList').append(li)
            } else {
                if (!added && !isPost)
                    document.getElementById('issueDoneList').append(li)
            }
            if (!isPost) {
                var card = addIssue(issue)
                card_deck_issue.append(card);
            }
        })
        issues_list.append(card_deck_issue);
    }

    async componentDidMount() {
        var authorizationBasic = window.btoa(process.env.REACT_APP_APIKey);
        var header = new Headers();
        header.set('Authorization', 'Basic ' + authorizationBasic)
        Promise.all([
        fetch('https://api.github.com/repos/minecode/minecode.github.io/issues', {
            method: 'GET',
            headers: header
        }),
        fetch('https://api.github.com/repos/minecode/minecode.github.io/issues?state=closed', {
            method: 'GET',
            headers: header
        })
        ])
        .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
        .then(([data1, data2]) => {
            this.setState({
                dataOpen: data1,
                dataClose: data2
            })
        })
    }

    componentDidUpdate() {
        this.getIdeasOpenList()
        this.getIdeasCloseList()
    }

    render() {
        return (
            <div className="container">
                <div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center" id="ideas">
                    <h1 className="display-4">Ideas</h1>
                    <p className="lead">Status of MineCode</p>
                </div>
                <div className="card-deck mb-3 text-center">
                    <div className="card mb-4 box-shadow">
                        <div className="card-header" id='issueOpen'>
                            Open
                        </div>
                        <div className="card-body text-left" id='issueOpenList'>
                        </div>
                    </div>
                    <div className="card mb-4 box-shadow">
                        <div className="card-header" id='issueInProgress'>
                            In progress
                        </div>
                        <div className="card-body text-left" id='issueInProgressList'>
                        </div>
                    </div>
                    <div className="card mb-4 box-shadow">
                        <div className="card-header" id='issueDone'>
                            Done
                        </div>
                        <div className="card-body text-left" id='issueDoneList'>
                        </div>
                    </div>
                </div>
                <div id="issues_list">
                </div>
            </div>
        );
    }
}

export default Ideas;
