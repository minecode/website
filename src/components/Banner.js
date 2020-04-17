import React, { useState, useEffect } from 'react';
import { titleCase } from './Utils';

function getDate(created_at) {
	var date = new Date(created_at);
	const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
		'July', 'August', 'September', 'October', 'November', 'December'
	];
	return monthNames[date.getMonth()] + ', ' + date.getFullYear();
}

export default function Banner() {
	const color = '#f1f1f1';
	const [element, setElement] = useState('blog');
	const [posts, setPosts] = useState(null);
	const [hoverElement, setHoverElement] = useState(null);
	const [data, setData] = useState(null);
	
	useEffect(() => {

		getRepositories();

		if (element) {
			if(element === 'blog') {
				getPostsList();
			}
			
		}
	}, [element]);

	let maxPost = 3;
	let maxApps = 3;
	var nPost = 0;
	var nApps = 0;
	let isPost = false;

	async function getPostsList() {
		var authorizationBasic = window.btoa(process.env.REACT_APP_APIKEY);
		var header = new Headers();
		header.set('Authorization', 'Basic ' + authorizationBasic);
		fetch(
			'https://api.github.com/repos/minecode/minecode.github.io/issues?state=closed',
			{
				method: 'GET',
				headers: header,
			}
		)
			.then((res) => res.json())
			.then((data) => {
				nPost = 0;
				isPost = false;
				setPosts(data);
			});
	}

	async function getRepositories() {
		var authorizationBasic = window.btoa(process.env.REACT_APP_APIKEY);
		var header = new Headers();
		header.set('Authorization', 'Basic ' + authorizationBasic);
		fetch('https://api.github.com/orgs/minecode/repos', {
			method: 'GET',
			headers: header,
		})
			.then((res) => res.json())
			.then((data) => {
				var count = 0;
				header.set(
					'Accept',
					'application/vnd.github.mercy-preview+json'
				);
				data.forEach((repo) => {
					Promise.all([
						fetch(
							'https://api.github.com/repos/minecode/' +
									repo.name +
									'/topics',
							{
								method: 'GET',
								headers: header,
							}
						),
						fetch(
							'https://api.github.com/repos/minecode/' +
									repo.name +
									'/contents/minecode_settings.json?ref=master',
							{
								method: 'GET',
								headers: header,
							}
						),
					])
						.then(([res1, res2]) =>
							Promise.all([res1.json(), res2.json()])
						)
						.then(([data2, data3]) => {
							if (data3.content !== undefined) {
								data3.content = JSON.parse(atob(data3.content));
							}
							var temp = 0;
							data.forEach((element) => {
								if (element.name === repo.name) {
									data[temp].topic = data2;
									data[temp].minecode_settings =
											data3.content;
								}
								temp++;
							});
							count++;
							if (data.length === count) {
								setData(data);
							}
						});
				});
			});
	}



	return (
		<div
			className={'container-fluid'}
			style={{
				backgroundColor: color,
				transition: 'all .5s ease',
				WebkitTransition: 'all .5s ease',
				MozTransition: 'all .5s ease',
			}}>
			<div className={'container'}>
				<div
					className={'row vertical-align-middle'}
					style={{
						alignItems: 'center',
						height: data ? 500 : 0,
						opacity: data ? 1 : 0,
						transition: 'height 0.5s ease, opacity 1.5s ease',
						WebkitTransition: 'height 0.5s ease, opacity 1.5s ease',
						MozTransition: 'height 0.5s ease, opacity 1.5s ease',
					}}>
					<div
						className={'col-md-4 col-sm-12 text-left'}
						style={{
							height: 500,
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-around',
							alignItems: 'flex-start',
						}}>
						{data && <>
							<div
								className={'btn'}
								style={{
									color: '#212121',
									fontSize: element === 'blog' ? 30 : 20,
									marginLeft: element === 'blog' ? 10 : 0,
									transition: 'all .5s ease',
									WebkitTransition: 'all .5s ease',
									MozTransition: 'all .5s ease',
									fontWeight: 100,
								}}
								onClick={() => {
									setElement('blog');
								}}>
							Blog
							</div>
							<div
								className={'btn'}
								style={{
									color: '#212121',
									fontSize: element === 'applications' ? 30 : 20,
									marginLeft: element === 'applications' ? 10 : 0,
									transition: 'all .5s ease',
									WebkitTransition: 'all .5s ease',
									MozTransition: 'all .5s ease',
									fontWeight: 100,
								}}
								onClick={() => {
									setElement('applications');
								}}>
							Applications
							</div>
						</>}
					</div>
					<div
						className={'col-sm-12 col-md-8 text-center '}
						style={{
							alignItems: 'center',
						}}>
						{element && data && (
							<div
								style={{
									alignItems: 'center',
								}}>
								<div
									className={'row justify-content-center vertical-align-midle'}
								>
									{element === 'blog' &&
										posts &&
										posts.map((post, i) => {
											post.labels.map((label) => {
												if (label.name === 'Post') {
													isPost = true;
													return;
												}
											});
											if (isPost && nPost < maxPost) {
												nPost++;

												return (
													<a
														key={i}
														className={
															'col-sm-12 col-md-3 btn mx-2 my-2 p-2 row justify-content-center'
														}
														href={
															'/blog/post/' +
															post.number
														}
														onMouseEnter={() =>
															setHoverElement(i)
														}
														onMouseLeave={() =>
															setHoverElement(
																null
															)
														}
														style={{
															backgroundImage: post.body.match(
																/(?:!\[(.*?)\]\((.*?)\))/g
															)
																? `linear-gradient(#21212190, #21212190), url(${
																	post.body
																		.match(
																			/(?:!\[(.*?)\]\((.*?)\))/g
																		)[0]
																		.split(
																			'('
																		)[1]
																		.split(
																			')'
																		)[0]
																})`
																: null,
															backgroundSize:
																'cover',
															backgroundColor: post.body.match(
																/(?:!\[(.*?)\]\((.*?)\))/g
															)
																? null
																: '#21212180',
															borderRadius: 20,
															border: 0,
															height:
																hoverElement ===
																i
																	? 320
																	: 300,
															transition:
																'all .5s ease',
															WebkitTransition:
																'all .5s ease',
															MozTransition:
																'all .5s ease',
														}}>
														<div
															className="col-12"
															style={{
																position: 'relative',
																top: '10px',
																color:
																	'#f1f1f1',
																fontSize: 25,
																fontWeight: 100,
															}}>
															{
																post.title.split(
																	/\[\w*\] /
																)[1]
															}
														</div>
														<br/>
														<p className="col-12" style={{color: '#f1f1f1', position: 'absolute', bottom: 10, left: 0, right: 0, fontSize:12, opacity: 0.8}}>
															Posted on {
																getDate(post.created_at)
															} by {
																post.user.login
															} <a href={'https://github.com/' + post.user.login} target="_blank" rel="noopener noreferrer" style={{color: '#fff'}}>
																<img className="rounded-circle" src={post.user.avatar_url} alt="Github" width="16" height="16">
																</img>
															</a>
														</p>
													</a>
												);
											}
										})}
									{element === 'applications' && data && data.map((app, i) => {
										if(app.topic.names.includes('production') && nApps < maxApps) {
											nApps++;
											return <a
												key={i}
												className={
													'col-sm-12 col-md-3 btn mx-2 my-2 p-2 row justify-content-center'
												}
												href={
													'/app/' +
															app.name
												}
												onMouseEnter={() =>
													setHoverElement(i)
												}
												onMouseLeave={() =>
													setHoverElement(
														null
													)
												}
												style={{
													backgroundImage: `linear-gradient(#21212190, #21212190), url(${
														'https://raw.githubusercontent.com/minecode/' +
														app.name +
														'/master/' +
														app.minecode_settings
															.image
													})`,
													backgroundSize:
																'cover',

													borderRadius: 20,
													border: 0,
													height:
																hoverElement ===
																i
																	? 320
																	: 300,
													transition:
																'all .5s ease',
													WebkitTransition:
																'all .5s ease',
													MozTransition:
																'all .5s ease',
													backgroundPositionX: 'center',
													backgroundPositionY: 'top'
												}}>
												<div
													className="col-12"
													style={{
														position: 'relative',
														top: '10px',
														color:
																	'#f1f1f1',
														fontSize: 25,
														fontWeight: 100,
													}}>
													{titleCase(app.name)}
												</div>
							
											</a>;
										}
									})}
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
