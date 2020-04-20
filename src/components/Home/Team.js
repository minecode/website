import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
        <div className="container">
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center" id="team">
            <h1 className="display-4">Team</h1>
            <p className="lead">Developers of MineCode</p>
            </div>
            <div className="card-deck mb-3 text-center">
            <div className="card mb-4 box-shadow">
                <div className="card-header">
                <h4 className="my-0 font-weight-normal">Fábio Henriques</h4>
                </div>
                <div className="card-body">
                <img src="/images/fh.jpeg" className="rounded-circle" alt="Fábio Henriques" width="96" height="96" />
                <ul className="list-unstyled mt-3 mb-3">
                    <li><b>Master Degree in Mathematic and Applications</b></li>
                    <li>Full stack developer</li>
                    <li className="mt-3 mb-3"><a target="_blank" href="" rel="noopener noreferrer"git ><b>Full profile (CV)</b></a></li>
                </ul>
                <a type="button" className="mt-3 mb-4 btn btn-lg btn-outline-primary githublogo" href="https://github.com/fabiohfab"
                    target="_blank" rel="noopener noreferrer">
                    <img src="/images/github.svg" alt="Github" width="24" height="24" />
                    <span> GitHub</span>
                </a>
                </div>
            </div>

            <div className="card mb-4 box-shadow">
                <div className="card-header">
                <h4 className="my-0 font-weight-normal">Cláudio Henriques</h4>
                </div>
                <div className="card-body">
                <img src="/images/ch.jpeg" className="rounded-circle" alt="Cláudio Henriques" width="96" height="96" />
                <ul className="list-unstyled mt-3 mb-3">
                    <li><b>Master Degree in Mathematic and Applications</b></li>
                    <li>Front-end and software tester</li>
                    <li className="mt-3 mb-3"><a target="_blank" href="" rel="noopener noreferrer"><b>Full profile (CV)</b></a></li>
                </ul>
                <a type="button" className="mt-3 mb-4 btn btn-lg btn-outline-primary githublogo" href="https://github.com/cfchenr"
                    target="_blank" rel="noopener noreferrer">
                    <img src="/images/github.svg" alt="Github" width="24" height="24" />
                    <span> GitHub</span>
                </a>
                </div>
            </div>
            </div>
        </div>
    );
  }
}

export default Footer;
