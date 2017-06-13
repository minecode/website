import React, { Component } from 'react';

class Applications extends Component {
  render() {
    return (
      <div className="container">
        <div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center" id="applications">
          <h1 className="display-4">Applications</h1>
          <p className="lead">Application center, developed by MineCode.</p>
        </div>
        <div className="card-deck mb-3 text-center">
          <div className="card mb-4 box-shadow">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Pet Find</h4>
            </div>
            <div className="card-body">
              <img src="images/pet_find/logo_transparent.png" alt="Pet Find logo" width="96" height="96" />
              <ul className="list-unstyled mt-3 mb-3">
                <li>Search your lost pet</li>
                <li>Place found animals</li>
                <li className="mt-3 mb-3"><a target="_blank" rel="noopener noreferrer" href="/privacy_policy.html"><b>Privacy
                      policy</b></a></li>
              </ul>
              <a href="https://play.google.com/store/apps/details?id=pt.fhenriques.petfind" target="_blank" rel="noopener noreferrer"  type="button"
                className="mt-3 mb-4 btn btn-lg btn-outline-primary">
                <img src="images/google-play-store.svg" alt="PlayStore" width="24" height="24" />
                Get app
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Applications;
