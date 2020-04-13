import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import CodeBlock from '../CodeBlock';

function getDate(created_at) {
	var date = new Date(created_at);
	const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
		'July', 'August', 'September', 'October', 'November', 'December'
	];
	return monthNames[date.getMonth()] + ', ' + date.getFullYear();
}

Post.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			id: PropTypes.isRequired
		})
	}),
};

export default function Post(props) {

	const [post, setPost] = useState(null);
	const [comments, setComments] = useState(null);
	const [labels, setLabels] = useState(null);
	const [authorizedUsers, setAuthorizedUsers] = useState(null);
	const [coAuthors, setCoAuthors] = useState(null);
	const [relatedPosts, setRelatedPosts] = useState(null);

	const id = props.match.params.id;

	useEffect(() => {
		var authorizationBasic = window.btoa(process.env.REACT_APP_APIKEY);
		var header = new Headers();
		header.set('Authorization', 'Basic ' + authorizationBasic);
		Promise.all([
			fetch(
				'https://api.github.com/repos/minecode/minecode.github.io/issues/' +
					id, {
					method: 'GET',
					headers: header
				}),
			fetch(
				'https://api.github.com/repos/minecode/minecode.github.io/issues/' +
					id + '/comments', {
					method: 'GET',
					headers: header
				}),
			fetch(
				'https://api.github.com/orgs/minecode/members', {
					method: 'GET',
					headers: header
				}),
			fetch(
				'https://api.github.com/repos/minecode/minecode.github.io/issues?state=closed', {
					method: 'GET',
					headers: header
				})
		])
			.then(([res1, res2, res3, res4]) => Promise.all([res1.json(), res2.json(), res3.json(), res4.json()]))
			.then(([data1, data2, data3, data4]) => {
				setPost(data1);
				setComments(data2);
				setLabels(data1.labels);
				setAuthorizedUsers(data3.map(function (element) { return element.login; }));
				setCoAuthors(data1.assignees.filter(element2 => element2.login !== data1.user.login));
				setRelatedPosts(data4.filter(element2 => {
					if (element2.user.login === data1.user.login && element2.labels.filter(element => element.name === 'Post').length > 0 && element2.id !== data1.id) {
						return true;
					} else {
						return false;
					}

				}));
			});
	}, [id]);

	return (
		<>
			{post && authorizedUsers && labels && [post].map((element, i) => {
				if (labels.length > 0 && element.state === 'closed' && labels.filter(element => element.name === 'Post') && authorizedUsers.includes(element.closed_by.login)
				) {
					var bannerImage = [];
					if (element.body.match(/(?:!\[(.*?)\]\((.*?)\))/g)) {
						bannerImage = element.body.match(/(?:!\[(.*?)\]\((.*?)\))/g)[0].split('(')[1].split(')')[0];
					}
					return(
						<div key={i}>
							<div className="container-fluid" id="content" style={{
								backgroundImage:  `url(${bannerImage})`,
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								backgroundPosition: 'center',
								filter: 'blur(8px)',
								height: '400px',
								position: 'absolute'
							}}>
							</div>
							<div className="container-fluid" style={{
								backgroundColor: 'black',
								color: 'white',
								fontWeight: 'bold',
								zIndex: '-1',
								height: '400px',
								textAlign: 'center',
								position: 'absolute'
							}}>
							</div>
							<div className="container-fluid" style={{
								backgroundColor: 'rgb(0,0,0,0.5)',
								color: 'white',
								fontWeight: 'bold',
								zIndex: '2',
								height: '400px',
								textAlign: 'center',
								position: 'relative'
							}}>
								<div className="pricing-header px-3 py-3 mx-auto text-center"id="title">
									<h1 className="display-4" style={{color: '#fff', marginTop: '5%'}}>
										{element.title.split(/\[\w*\] /)[1]}
									</h1>
								</div>
								<div className="pricing-header px-3 py-3 pb-md-4 mx-auto text-center">
									<div className="d-flex align-middle justify-content-center align-items-center">
										{post && [post].map((element, i) => {
											return(
												<div className="row" key={i}>
													<div className="align-self-center p-2" id="userLogo" key={i}>
														<img className="rounded-circle" src={element.user.avatar_url} alt="User" width="35" height="35">
														</img>
													</div>
													<div className="align-self-center p-2" id="infoPost" key={i}>
														<h5 style={{color: '#fff'}}>
															Posted on {
																getDate(element.created_at)
															} by {
																element.user.login
															}
															<a className="mt-3 mb-4 btn btn-sm" href={'https://github.com/' + element.user.login} target="_blank" rel="noopener noreferrer" style={{color: '#fff'}}>
																<img src="/images/github_white.svg" alt="Github" width="24" height="24">
																</img>
															</a>
															{coAuthors && coAuthors.length > 0 && coAuthors.map((element, i) => {
																return(
																	<>
																		{i === 0 ? <span style={{opacity:0.5}}>(</span> : <></>}
																		<span key={i} style={{opacity:0.5}}>{element.login} <a className="mt-3 mb-4 btn btn-sm" href={'https://github.com/' + element.login} target="_blank" rel="noopener noreferrer" style={{color: '#fff'}}>
																			<img src="/images/github_white.svg" alt="Github" width="24" height="24">
																			</img>
																		</a>
																		</span>
																		{i === (coAuthors.length-1) ? <span style={{opacity:0.5}}>)</span> : <></>}
																	</>
																);
															})}
														</h5>
													</div>
												</div>
											);
										})}
									</div>
								</div>
							</div>
							<div className="container">
								<div className="pt-md-5 pb-md-4 mx-auto" id="post">
									<div>
										<ReactMarkdown source={element.body} renderers={{ code: CodeBlock }}/>
									</div>
								</div>
								<div className="text-center">
									{ labels && labels.map((element, i) => {
										if (element.name !== 'Post') {
											return(
												<a key={i} href={'/blog/tag/' + element.name} className="m-1 btn btn-primary" style={{backgroundColor: '#' + element.color, border: 'none'}}>
													{element.name}
												</a>
											);
										} else {
											return(
												<></>
											);
										}
									})}
								</div>
								{comments && comments.map((element, i) => {
									if (element.user.login === post.user.login) {
										return(
											<>
												{i === 0 ? <><hr className="mt-5 mb-5"/><h4>Comments:</h4></> : <></>}
												<div
													className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto row"
													id="comments" key={i}
												>
													<div className="row col-12">
														<div className="col-1 text-center" style={{zIndex: 1}}>
															<img className="m-3 rounded-circle" src={element.user.avatar_url} alt="User" width="35" height="35">
															</img>   
														</div>
														<div className="col-11">
															<div className="card mt-3 mb-3">
																<div className="card-header">
																	<div>
																		Posted on {
																			getDate(element.created_at)
																		} by {
																			element.user.login
																		}
																	</div>
																</div>
																<div className="card-body">
																	<ReactMarkdown source={element.body} renderers={{ code: CodeBlock }}/>
																</div>
															</div>
														</div>
													</div>
												</div>
											</>
										);
									} else {
										return(
											<div
												className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto row"
												id="comments" key={i}
											>
												<div className="row col-12">
													<div className="col-11">
														<div className="card mt-3 mb-3">
															<div className="card-header">
																<div>
																	Posted on {
																		getDate(element.created_at)
																	} by {
																		element.user.login
																	}
																</div>
															</div>
															<div className="card-body">
																<ReactMarkdown source={element.body} renderers={{ code: CodeBlock }}/>
															</div>
														</div>
													</div>
													<div className="col-1 text-center">
														<img className="m-3 rounded-circle" src={element.user.avatar_url} alt="User" width="35" height="35">
														</img>   
													</div>
												</div>
											</div>
										);
									}
								})}
								<hr className="mt-5 mb-5"/>
								<h4>Written by:</h4>
								<div className="row">
									{post && [post].map((element, i) => {
										return(
											<div className="col-4 row" key={i}>
												<div className="align-self-center p-2" id="userLogo">
													<img className="rounded-circle" src={element.user.avatar_url} alt="User" width="35" height="35">
													</img>
												</div>
												<div className="align-self-center p-2">
													{element.user.login}
													<a className="mt-3 mb-4 btn btn-sm" href={'https://github.com/' + element.user.login} target="_blank" rel="noopener noreferrer" style={{color: '#fff'}}>
														<img src="/images/github.svg" alt="Github" width="24" height="24">
														</img>
													</a>
												</div>
											</div>
										);
									})}
									{coAuthors && coAuthors.map((element, i) => {
										return(
											<div className="col-4 row" key={i}>
												<div className="align-self-center p-2" id="userLogo">
													<img className="rounded-circle" src={element.avatar_url} alt="User" width="35" height="35">
													</img>
												</div>
												<div className="align-self-center p-2">
													{element.login}
													<a className="mt-3 mb-4 btn btn-sm" href={'https://github.com/' + element.login} target="_blank" rel="noopener noreferrer" style={{color: '#fff'}}>
														<img src="/images/github.svg" alt="Github" width="24" height="24">
														</img>
													</a>
												</div>
											</div>
										);
									})}
								</div>
								{relatedPosts && relatedPosts.length > 0 && [relatedPosts[0]].map((element) => {
									return(
										<>
											<hr className="mt-5 mb-5"/><h4 className="col-12">More from {element.user.login}:</h4>
										</>
									);
								})}
								<div className="row">
									{relatedPosts && relatedPosts.length > 0 && relatedPosts.map((element, i) => {
										var bannerImage2 = [];
										if (element.body.match(/(?:!\[(.*?)\]\((.*?)\))/g)) {
											bannerImage2 = element.body.match(/(?:!\[(.*?)\]\((.*?)\))/g)[0].split('(')[1].split(')')[0];
										}
										return(
											<>
												<div className="col-4 mt-3 mb-3 text-center" key={i}>
													<a href={'/blog/post/' + element.number}>
														<div style={{
															backgroundImage:  `url(${bannerImage2})`,
															backgroundSize: 'cover',
															backgroundRepeat: 'no-repeat',
															backgroundPosition: 'center',
															height: '250px',
														}} className="mb-2">
														</div>
														<h4>{element.title.split(']')[1]}</h4>
													</a>
												</div>
											</>
										);
									})}
								</div>
							</div>
						</div>
					);
				} else {
					return(<></>);
				}
			})}
		</>
	);
}