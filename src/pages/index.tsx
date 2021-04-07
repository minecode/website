import React, { useState } from 'react';
import { getListCards } from '../components/Utils';
import { useFetch } from '../hooks/useFetch';

function Blog() {
	const [hoverElement, setHoverElement] = useState(null);
	const {data: post} = useFetch('repos/minecode/minecode.github.io/issues/closed')

	return(
		<>
			{post && getListCards(post, hoverElement, setHoverElement)}
		</>
	);
}
export default Blog;
