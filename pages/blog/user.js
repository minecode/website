import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getListCards, getHeader } from '../../components/Utils';


User.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			user: PropTypes.isRequired
		})
	}),
};

export default function User(props) {

	const [hoverElement, setHoverElement] = useState(null);
	const [post, setPost] = useState(null);
	const user = props.match.params.user;

	useEffect(() => {
		fetch('https://api.github.com/repos/minecode/minecode.github.io/issues?state=closed', {
			method: 'GET', headers: getHeader()
		})
			.then(res => res.json())
			.then(data => {
				setPost(data.filter(element => element.user.login === user));
			});
	}, [user]);

	return(
		<>
			{getListCards(post, hoverElement, setHoverElement)}
		</>
	);
}
