import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function getDate(created_at) {
	var date = new Date(created_at);
	const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
		'July', 'August', 'September', 'October', 'November', 'December'
	];
	return monthNames[date.getMonth()] + ', ' + date.getFullYear();
}

User.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			user: PropTypes.isRequired
		})
	}),
};

export default function User(props) {

	const [post, setPost] = useState(null);
	const user = props.match.params.user;

	useEffect(() => {
		var authorizationBasic = window.btoa(process.env.REACT_APP_APIKEY);
		var header = new Headers();
		header.set('Authorization', 'Basic ' + authorizationBasic);
		fetch('https://api.github.com/repos/minecode/minecode.github.io/issues?state=closed', {
			method: 'GET', headers: header
		})
			.then(res => res.json())
			.then(data => {
				setPost(data.filter(element => element.user.login === user));
			});
	}, []);

	return (
		<div className="container">
			<div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center" id="posts">
				<h1 className="display-4">Blog</h1>
				<p className="lead">Minecode Posts</p>
			</div>
			<div id="posts_list">
				{post && post.map((element, i) => {
					var isPost = false;
					{element.labels.forEach((element) => {
						if (element.name === 'Post') {
							isPost = true;
							return;
						}
					});}
					if (isPost) {
						var bannerImage2 = [];
						if (element.body.match(/(?:!\[(.*?)\]\((.*?)\))/g)) {
							bannerImage2 = element.body.match(/(?:!\[(.*?)\]\((.*?)\))/g)[0].split('(')[1].split(')')[0];
						}
						return(
							<div className="card-deck mb-3 text-center" key={i}>
								<div className="col-12 text-center">
									<div>
										<a className="row" href={'/blog/post/' + element.number}>
											<div style={{
												backgroundImage:  `url(${bannerImage2})`,
												backgroundSize: 'cover',
												backgroundRepeat: 'no-repeat',
												backgroundPosition: 'center',
												height: '150px',
											}} className="mb-2 offset-2 col-3">
											</div>
											<div className="offset-1 col-4 text-left d-flex align-middle align-items-center">
												<div>
													<h4>{element.title.split(']')[1]}</h4><br/>
													<span>
														Posted on {
															getDate(element.created_at)
														} by {
															element.user.login
														}
														<a className="mt-3 mb-4 btn btn-sm" href={'https://github.com/' + element.user.login} target="_blank" rel="noopener noreferrer" style={{color: '#000'}}>
															<img src="/images/github.svg" alt="Github" width="14" height="14">
															</img>
														</a>
													</span>
												</div>
											</div>
										</a>
									</div>
									
								</div>
							</div>
						);
					}else {
						return(<></>);
					}})
				}
			</div>
		</div>
	);
}
