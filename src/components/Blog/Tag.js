import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getListCards, getHeader } from '../Utils';


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
	}, [tag]);

	return(
		<>
			{getListCards(post, hoverElement, setHoverElement)}
		</>
	);
}
