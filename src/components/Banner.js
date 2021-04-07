import React, { useState } from 'react';
import { getElement, getCard } from './Utils';

function Banner({ posts, labels }) {
	const color = '#f1f1f1';
	const [element, setElement] = useState('blog');
	const [hoverElement, setHoverElement] = useState(null);

	let maxPost = 3;
	var nPost = 0;

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
						height: 500,
						opacity: 1,
						transition: 'height 0.5s ease, opacity 1.5s ease',
						WebkitTransition: 'height 0.5s ease, opacity 1.5s ease',
						MozTransition: 'height 0.5s ease, opacity 1.5s ease',
					}}
				>
					<div
						className={'col-8 text-center '}
						style={{
							alignItems: 'center',
						}}
					>
						{element && (
							<div style={{alignItems: 'center',
							}}>
								<div className={'row justify-content-center vertical-align-midle'}>
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
								</div>
							</div>
						)}
					</div>
					<div
						className={'col-4 text-left '}
						style={{
							alignItems: 'center',
						}}
					>
						{ labels && labels.map((element, i) => {
							if (element.name !== 'highlight') {
								return(
									<a key={i} href={'/tag/' + element.name} className="m-1 btn btn-primary" style={{backgroundColor: '#' + element.color, border: 'none'}}>
										{element.name}
									</a>
								);
							} else {
								return(
									<></>
								);
							}
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Banner;