import React, { useState, useEffect } from 'react';
import { getListCards, getHeader } from '../../../components/Utils';

import { useRouter } from 'next/router'

const user = () => {

	const [hoverElement, setHoverElement] = useState(null);
	const [post, setPost] = useState(null);

    const router = useRouter()
	const { id } = router.query

	useEffect(() => {
        if (id != undefined) {
		fetch('https://api.github.com/repos/minecode/minecode.github.io/issues?state=closed', {
			method: 'GET', headers: getHeader()
		})
			.then(res => res.json())
			.then(data => {
				setPost(data.filter(element => element.user.login === id));
            });
        }
	}, [id]);

	return(
		<>
			{getListCards(post, hoverElement, setHoverElement)}
		</>
	);
}

export default user;