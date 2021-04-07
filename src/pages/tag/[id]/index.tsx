import React, { useState, useEffect } from 'react';
import { getListCards, getHeader } from '../../../components/Utils';

import { useRouter } from 'next/router';

const tag = () => {

	const [hoverElement, setHoverElement] = useState(null);
	const [post, setPost] = useState(null);

	const router = useRouter();
	const { id } = router.query;

	useEffect(() => {
		if (id != undefined) {
			fetch('https://minecode.herokuapp.com/github/repos/minecode/minecode.github.io/issues/closed', {
				method: 'GET', headers: getHeader()
			})
				.then(res => res.json())
				.then(data => {
					setPost(data.filter(element2 => {
						if (element2.labels.filter(element => element.name === id).length > 0) {
							return true;
						} else {
							return false;
						}

					}));
				});
		}
	}, [id]);

	return(
		<>
			{getListCards(post, hoverElement, setHoverElement)}
		</>
	);
};

export default tag;

