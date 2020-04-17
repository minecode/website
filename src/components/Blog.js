import React, { useState, useEffect } from 'react';
import { getElement, getCard, getHeader } from './Utils';

export default function Blog() {

	const [post, setPost] = useState(null);
	const [hoverElement, setHoverElement] = useState(null);

	useEffect(() => {
		const header = getHeader();
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
						const postElement = getElement('post', element);
						return(
							getCard(i, postElement, hoverElement, setHoverElement)
						);
					}else {
						return(<></>);
					}})
				}
			</div>
		</div>
	);
}
