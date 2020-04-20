import React, { useState, useEffect } from 'react';
import { getElement, getCard, getHeader } from './Utils';

import { faRss, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Banner() {
	const color = '#f1f1f1';
	const [element, setElement] = useState('blog');
	const [posts, setPosts] = useState(null);
	const [hoverElement, setHoverElement] = useState(null);
	const [hoverTab, setHoverTab] = useState(null);
	const [data, setData] = useState(null);
	const [header, setHeader] = useState(null);

	let maxPost = 3;
	let maxApps = 3;
	var nPost = 0;
	var nApps = 0;

	function getPostsList() {
		fetch(
			'https://api.github.com/repos/minecode/minecode.github.io/issues?state=closed',
			{
				method: 'GET',
				headers: header,
			}
		)
			.then((res) => res.json())
			.then((data) => {
				nPost = 0;
				setPosts(data);
			})
			.catch(() => {
				//Do something with error
			});
	}

	function getRepositories() {
		fetch('https://api.github.com/orgs/minecode/repos', {
			method: 'GET',
			headers: header,
		})
			.then((res) => res.json())
			.then((data) => {
				var count = 0;
				header.set(
					'Accept',
					'application/vnd.github.mercy-preview+json'
				);
				data.forEach((repo) => {
					Promise.all([
						fetch(
							'https://api.github.com/repos/minecode/' +
								repo.name +
								'/topics',
							{
								method: 'GET',
								headers: header,
							}
						),
						fetch(
							'https://api.github.com/repos/minecode/' +
								repo.name +
								'/contents/minecode_settings.json?ref=master',
							{
								method: 'GET',
								headers: header,
							}
						),
					])
						.then(([res1, res2]) =>
							Promise.all([res1.json(), res2.json()])
						)
						.then(([data2, data3]) => {
							if (data3.content !== undefined) {
								data3.content = JSON.parse(atob(data3.content));
							}
							var temp = 0;
							data.forEach((element) => {
								if (element.name === repo.name) {
									data[temp].topic = data2;
									data[temp].minecode_settings =
										data3.content;
								}
								temp++;
							});
							count++;
							if (data.length === count) {
								setData(data);
							}
						});
				});
			});
	}

	useEffect(() => {
		if (header) {
			getRepositories();
			if (element) {
				if (element === 'blog') {
					getPostsList();
				}
			}
		}
	}, [element, header]);

	useEffect(() => {
		const temp = getHeader();
		setHeader(temp);
	}, []);

	return (
		<div
			className={'container-fluid'}
			style={{
				backgroundColor: color,
				transition: 'all .5s ease',
				WebkitTransition: 'all .5s ease',
				MozTransition: 'all .5s ease',
			}}
		>
			<div className={'container'}>
				<div
					className={'row vertical-align-middle'}
					style={{
						alignItems: 'center',
						justifyContent: 'center',
						height: data ? 500 : 0,
						opacity: data ? 1 : 0,
						transition: 'height 0.5s ease, opacity 1.5s ease',
						WebkitTransition: 'height 0.5s ease, opacity 1.5s ease',
						MozTransition: 'height 0.5s ease, opacity 1.5s ease',
					}}
				>
					<div
						className={'col-md-4 col-sm-12 text-left'}
						style={{
							height: 500,
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						{data && (
							<>
								<div
									className={'btn my-2'}
									style={{
										color:
											element === 'blog'
												? '#5ca4da'
												: hoverTab === 'blog'
													? '#5ca4da'
													: '#212121',
										border: 0,
										borderRadius: 20,
										fontSize: element === 'blog' ? 25 : 20,
										transition: 'all .5s ease',
										WebkitTransition: 'all .5s ease',
										MozTransition: 'all .5s ease',
										fontWeight: 100,
										border: 'solid',
										borderWidth: element === 'blog' ? 1 : 0,
									}}
									onMouseEnter={() => setHoverTab('blog')}
									onMouseLeave={() => setHoverTab(null)}
									onClick={() => {
										setElement('blog');
									}}
								>
									<FontAwesomeIcon icon={faRss} /> Blog
								</div>
								<div
									className={'btn my-2'}
									style={{
										color:
											element === 'applications'
												? '#5ca4da'
												: hoverTab === 'applications'
													? '#5ca4da'
													: '#212121',
										fontSize:
											element === 'applications'
												? 25
												: 20,
										border: 0,
										borderRadius: 20,
										transition: 'all .5s ease',
										WebkitTransition: 'all .5s ease',
										MozTransition: 'all .5s ease',
										fontWeight: 100,
										border: 'solid',
										borderWidth:
											element === 'applications' ? 1 : 0,
									}}
									onMouseEnter={() =>
										setHoverTab('applications')
									}
									onMouseLeave={() => setHoverTab(null)}
									onClick={() => {
										setElement('applications');
									}}
								>
									<FontAwesomeIcon icon={faMobileAlt} />{' '}
									Applications
								</div>
							</>
						)}
					</div>
					<div
						className={'col-sm-12 col-md-8 text-center '}
						style={{
							alignItems: 'center',
						}}
					>
						{element && data && (
							<div
								style={{
									alignItems: 'center',
								}}
							>
								<div
									className={
										'row justify-content-center vertical-align-midle'
									}
								>
									{element === 'blog' &&
										posts &&
										posts.map((post, i) => {
											var isPost = false;
											post.labels.map((label) => {
												if (label.name === 'post') {
													isPost = true;
													return;
												}
											});
											if (isPost && nPost < maxPost) {
												nPost++;
												const postElement = getElement(
													'post',
													post
												);
												return getCard(
													i,
													postElement,
													hoverElement,
													setHoverElement
												);
											}
										})}
									{element === 'applications' &&
										data &&
										data.map((app, i) => {
											if (
												app.topic.names.includes(
													'production'
												) &&
												nApps < maxApps
											) {
												nApps++;
												const appElement = getElement(
													'app',
													app
												);
												return getCard(
													i,
													appElement,
													hoverElement,
													setHoverElement
												);
											}
										})}
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
