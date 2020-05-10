import React, { useState } from 'react';
import { getElement, getCard } from './Utils';

import { faRss, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Banner({ posts, data }) {
	console.log(posts);
	console.log(data);
	const color = '#f1f1f1';
	const [element, setElement] = useState('blog');
	const [hoverElement, setHoverElement] = useState(null);
	const [hoverTab, setHoverTab] = useState(null);

	let maxPost = 3;
	let maxApps = 3;
	var nPost = 0;
	var nApps = 0;

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
										border: 'solid 0',
										borderRadius: 20,
										fontSize: element === 'blog' ? 25 : 20,
										transition: 'all .5s ease',
										WebkitTransition: 'all .5s ease',
										MozTransition: 'all .5s ease',
										fontWeight: 100,
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
										border: 'solid 0',
										borderRadius: 20,
										transition: 'all .5s ease',
										WebkitTransition: 'all .5s ease',
										MozTransition: 'all .5s ease',
										fontWeight: 100,
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
										// eslint-disable-next-line
										posts.map((post, i) => {
											var isPost = false;
											// eslint-disable-next-line
											post.labels.map((label) => {
												if (label.name === 'post') {
													isPost = true;
													// eslint-disable-next-line
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
										// eslint-disable-next-line
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

export default Banner;