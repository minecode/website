import React, { useState } from 'react';
import { getHeader, getListCards } from '../components/Utils';
import fetch from 'isomorphic-unfetch';

function Blog({ post }) {
	console.log(post);
	const [hoverElement, setHoverElement] = useState(null);

	return(
		<>
			{getListCards(post, hoverElement, setHoverElement)}
		</>
	);
}

export async function getStaticProps() {
	var header = getHeader();
	const res = await fetch('https://api.github.com/repos/minecode/minecode.github.io/issues?state=closed', {
		headers: header
	});
	const json = await res.json();
	return { props: {post: json }};
}

export default Blog;
