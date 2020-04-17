import React, { useState, useEffect } from 'react';
import { getListCards, getHeader } from './Utils';

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
	return(
		<>
			{getListCards(post, hoverElement, setHoverElement)}
		</>
	);
}
