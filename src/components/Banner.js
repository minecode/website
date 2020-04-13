import React, { useState, useEffect } from 'react';

export default function Banner() {
	const [color, setColor] = useState('#154360');
	const [element, setElement] = useState('blog');
	const [posts, setPosts] = useState(null);
	const [hoverElement, setHoverElement] = useState(null);
	useEffect(() => {
		if (element) {
			switch (element) {
				case 'blog':
					getPostsList();
					setColor('#154360');
					break;
				case 'ocean_king':
					setColor('#1F618D');
					break;
				case 'shopping_cart':
					setColor('#2980B9');
					break;
				case 'pet_find':
					setColor('#5ca4da');
					break;
				default:
					setColor('#5ca4da10');
					break;
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
						className={'col-md-3 col-sm-12 text-left'}
						style={{
							height: 500,
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-around',
							alignItems: 'flex-start',
						}}>
						<div
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
						</div>
						<div
							className={'btn'}
							style={{
								color: '#f1f1f1',
								fontSize: element === 'ocean_king' ? 30 : 20,
								marginLeft: element === 'ocean_king' ? 10 : 0,
								transition: 'all .5s ease',
								WebkitTransition: 'all .5s ease',
								MozTransition: 'all .5s ease',
								fontWeight: 100,
							}}
							onClick={() => {
								setElement('ocean_king');
							}}>
							Ocean King
						</div>
						<div
							className={'btn'}
							style={{
								color: '#f1f1f1',
								fontSize: element === 'shopping_cart' ? 30 : 20,
								marginLeft:
									element === 'shopping_cart' ? 10 : 0,
								transition: 'all .5s ease',
								WebkitTransition: 'all .5s ease',
								MozTransition: 'all .5s ease',
								fontWeight: 100,
							}}
							onClick={() => {
								setElement('shopping_cart');
							}}>
							Shopping cart
						</div>
						<div
							className={'btn'}
							style={{
								color: '#f1f1f1',
								fontSize: element === 'pet_find' ? 30 : 20,
								marginLeft: element === 'pet_find' ? 10 : 0,
								transition: 'all .5s ease',
								WebkitTransition: 'all .5s ease',
								MozTransition: 'all .5s ease',
								fontWeight: 100,
							}}
							onClick={() => {
								setElement('pet_find');
							}}>
							Pet find
						</div>
					</div>
					<div
						className={'col-sm-12 col-md-9 text-center '}
						style={{
							alignItems: 'center',
						}}>
						{element && (
							<div
								style={{
									alignItems: 'center',
									transition: 'all .5s ease',
									WebkitTransition: 'all .5s ease',
									MozTransition: 'all .5s ease',
								}}>
								<div
									className={'row vertical-align-midle'}
									style={{
										opacity: element === 'blog' ? '1' : 0,
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
															'col-sm-12 col-md-3 btn mx-2 my-2 p-2'
														}
														href={
															'./blog/post/' +
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
															style={{
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
													</a>
												);
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
