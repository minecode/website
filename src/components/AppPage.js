import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { titleCase } from './Utils';

AppPage.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			appName: PropTypes.isRequired,
		}),
	}),
};

export default function AppPage(props) {
	const appName = props.match.params.appName;

	const [data, setData] = useState(null);

	useEffect(() => {
		var authorizationBasic = window.btoa(process.env.REACT_APP_APIKEY);
		var header = new Headers();
		header.set('Authorization', 'Basic ' + authorizationBasic);
		fetch('https://api.github.com/repos/minecode/' + appName, {
			method: 'GET',
			headers: header,
		})
			.then((res) => res.json())
			.then((data) => {
				setData(data);
			});
	}, []);

	return (
		<div>
			<div
				className={'container-fluid'}
				style={{ minHeight: 500, backgroundColor: '#f1f1f1' }}>
				<div
					className={'container py-5'}
					style={{ minHeight: 500, color: '#212121' }}>
					{data && (
						<div>
							<h1>{titleCase(data.name)}</h1>
							<div>{titleCase(data.description)}</div>
							<div>subscribers count</div>
							<div>forks</div>
							<div>stars</div>
							<div>license</div>
							<div>last update</div>
							<div>open issues</div>
							<div>playstore</div>
							<div>website</div>
							<div>github</div>
						</div>
					)}
				</div>
			</div>
			<div
				className={'container-fluid'}
				style={{ minHeight: 500, backgroundColor: '#212121' }}>
				<div
					className={'container py-5'}
					style={{ minHeight: 500, color: '#f1f1f1' }}>
					<h1>Next release</h1>
					<h1>Last release</h1>
					<h1>Implemented</h1>
					<h1>In progress</h1>
				</div>
			</div>
			<div
				className={'container-fluid'}
				style={{ minHeight: 500, backgroundColor: '#f1f1f1' }}>
				<div
					className={'container py-5'}
					style={{ minHeight: 500, color: '#212121' }}>
					<h1>Contributors</h1>
					<div></div>
				</div>
			</div>
		</div>
	);
}