import React, { useState, useEffect } from 'react';
import { getDate } from './Utils';

export default function Blog() {

	const [post, setPost] = useState(null);
	const [hoverElement, setHoverElement] = useState(null);

	useEffect(() => {
		var authorizationBasic = window.btoa(process.env.REACT_APP_APIKEY);
		var header = new Headers();
		header.set('Authorization', 'Basic ' + authorizationBasic);
		fetch('https://api.github.com/repos/minecode/minecode.github.io/issues?state=closed', {
			method: 'GET', headers: header
		})
			.then(res => res.json())
			.then(data => {
				setPost(data);
			});
	}, []);

	return (
		<div className="container">
			<div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center" id="posts">
				<h1 className="display-4">Blog</h1>
				<p className="lead">Minecode Posts</p>
			</div>
			<div id="posts_list" className="row justify-content-center">
				{post && post.map((element, i) => {
					var isPost = false;
					{element.labels.forEach((element) => {
						if (element.name === 'Post') {
							isPost = true;
							return;
						}
					});}
					if (isPost) {
						return (
							<a
								key={i}
								className={
									'col-sm-12 col-md-3 btn mx-2 my-2 p-2 justify-content-center'
								}
								href={
									'/blog/post/' +
									element.number
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
									backgroundImage: element.body.match(
										/(?:!\[(.*?)\]\((.*?)\))/g
									)
										? `linear-gradient(#21212190, #21212190), url(${
											element.body
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
									backgroundColor: element.body.match(
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
										position: 'relative',
										top: '10px',
										color:
											'#f1f1f1',
										fontSize: 25,
										fontWeight: 100,
									}}>
									{
										element.title.split(
											/\[\w*\] /
										)[1]
									}
								</div>
								<br/>
								<p className="col-12" style={{color: '#f1f1f1', position: 'absolute', bottom: 10, left: 0, right: 0, fontSize:12, opacity: 0.8}}>
									Posted on {
										getDate(element.created_at)
									} by {
										element.user.login
									} <a href={'https://github.com/' + element.user.login} target="_blank" rel="noopener noreferrer" style={{color: '#fff'}}>
										<img className="rounded-circle" src={element.user.avatar_url}alt="Github" width="16" height="16">
										</img>
									</a>
								</p>
							</a>
						);
					}else {
						return(<></>);
					}})
				}
			</div>
		</div>
	);
}
