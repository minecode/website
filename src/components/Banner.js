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
	const [color, setColor] = useState('#212121');
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
	var nPost = 0;
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
						minHeight: 500,
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
						{data && <div
							className={'btn'}
							style={{
								color: '#f1f1f1',
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
						</div>}
						{data && data.map((app,i) => {
							if (app.topic.names.includes('production')) {
								return <div
									key={i}
									className={'btn'}
									style={{
										color: '#f1f1f1',
										fontSize: element === app.name ? 30 : 20,
										marginLeft: element === app.name ? 10 : 0,
										transition: 'all .5s ease',
										WebkitTransition: 'all .5s ease',
										MozTransition: 'all .5s ease',
										fontWeight: 100,
									}}
									onClick={() => {
										setElement(app.name);
									}}>
									{titleCase(app.name)}
								</div>;	
							}
							
						})}
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
									transition: 'all .5s ease',
									WebkitTransition: 'all .5s ease',
									MozTransition: 'all .5s ease',
								}}>
								<div
									className={'row justify-content-center vertical-align-midle'}
									style={{
										transition: 'all .5s ease-out',
										WebkitTransition: 'all .5s ease-out',
										MozTransition: 'all .5s ease-out',
									}}>
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
									{element !== 'blog' && data && data.map((app, i) => {
										if(app.topic.names.includes('production') && app.name === element) {
											return <div
												key={i}
												style={{
													backgroundImage: `linear-gradient(#21212199, #21212199), url(${
														'https://raw.githubusercontent.com/minecode/' +
														app.name +
														'/master/' +
														app.minecode_settings
															.image
													})`,
													backgroundSize:
														'cover',
													backgroundColor: '#212121',
													borderRadius: 20,
													border: 0,
													width: '100%',
													height:
													'100%',
													transition:
														'all .5s ease',
													WebkitTransition:
														'all .5s ease',
													MozTransition:
														'all .5s ease',
												}}>
												<div className='container'>
													<div
														className='row'
														style={{
															minHeight: 350,
															alignItems: 'center',
															color: '#f1f1f1',
															margin: 20
														}}>
														<div className={'col-12 row'}>
															<div className={'col-6 text-right'}>
																<div className={'col-12'}>
																	<h2
																		className='display-6'
																		style={{
																			color: '#f1f1f1',
																		}}>
																		{titleCase(app.name)}
																	</h2>
																</div>
																<div className={'col-12'}>
																	<div
																		className={
																			'col-12 pl-0 pr-0'
																		}>
																		{app.description}
																	</div>
																</div>
															</div>
															<div className={'col-6 text-right'}>
																<img
																	width='192'
																	height='192'
																	src={
																		'https://raw.githubusercontent.com/minecode/' +
																app.name +
																'/master/' +
																app.minecode_settings
																	.image
																	} />
															</div>
															<div className={'col-12 text-left mt-3'}>
																<a href={
																	'/app/' +
																	app.name
																} className={'btn btn-primary'}>Consultar página</a>
															</div>
														</div>
														<div
															className={
																'text-left'
															}>
															
															<div className={'col-12'}>
																<div className='btn btn-group pl-0 pr-0'>
																	<a
																		className={
																			'btn btn-primary'
																		}
																		href={
																			app
																				.html_url
																		}
																		target='_blank'
																		rel='noopener noreferrer'>
																		<img
																			src='/images/github.svg'
																			width='24'
																			height='24'></img>{' '}
																				Github
																	</a>
																	{app.minecode_settings.link_mobile && (
																		<a
																			className={
																				'btn btn-primary'
																			}
																			href={
																				app
																					.minecode_settings
																					.link_mobile
																			}
																			target='_blank'
																			rel='noopener noreferrer'>
																			<img
																				src='/images/google-play-store.svg'
																				width='24'
																				height='24'></img>{' '}
																				Play Store
																		</a>
																	)}
																	{app.homepage && (
																		<a
																			className={
																				'btn btn-primary'
																			}
																			href={
																				app.homepage
																			}
																			target='_blank'
																			rel='noopener noreferrer'>
																			<img
																				src='/images/web-page.svg'
																				width='24'
																				height='24'></img>{' '}
																				Website
																		</a>
																	)}
																</div>
															</div>
														</div>

														
													</div>
												</div>
											</div>;
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
