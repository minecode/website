import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getDate, getCard, getHeader } from '../Utils';


Tag.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			tag: PropTypes.isRequired
		})
	}),
};

export default function Tag(props) {

	const [hoverElement, setHoverElement] = useState(null);
	const [post, setPost] = useState(null);
	const tag = props.match.params.tag;

	useEffect(() => {
		fetch('https://api.github.com/repos/minecode/minecode.github.io/issues?state=closed', {
			method: 'GET', headers: getHeader()
		})
			.then(res => res.json())
			.then(data => {
				setPost(data.filter(element2 => {
					if (element2.labels.filter(element => element.name === tag).length > 0) {
						return true;
					} else {
						return false;
					}

				}));
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
						const href = '/blog/post/' + element.number;
						const title = element.title.split(
							/\[\w*\] /
						)[1];
						const background = element.body.match(
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
							: null;
						const footer = <>Posted on {
							getDate(element.created_at)
						} by {
							element.user.login
						} <a href={'https://github.com/' + element.user.login} target="_blank" rel="noopener noreferrer" style={{color: '#fff'}}>
							<img className="rounded-circle" src={element.user.avatar_url}alt="Github" width="16" height="16">
							</img>
						</a></>;
						return(
							getCard(i, background, href, title, footer, hoverElement, setHoverElement)
						);
					}else {
						return(<></>);
					}})
				}
			</div>
		</div>
	);
}
