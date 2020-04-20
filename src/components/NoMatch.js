import React, { Component } from 'react';

class NoMatch extends Component {
	render() {
		return (
			<div className="container text-center justify-content-center align-items-center">
				<div className="row text-center justify-content-center align-items-center">
					<img src="/images/404.png" height="300px" widht="300px" alt="404"/>
				</div>
				<div className="mt-5 row text-center justify-content-center align-items-center">
					<h1 className="col-12">
                    Ooops! 404 error!
					</h1>
					<p className="col-12">Sorry! We can`&apos;`t find the page what you are looking for.</p>
				</div>
			</div>
		);
	}
}

export default NoMatch;
