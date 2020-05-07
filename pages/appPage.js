import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { titleCase, getHeader, getCard, getElement } from '../components/Utils';

import { faStar, faEye, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

AppPage.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			appName: PropTypes.isRequired,
		}),
	}),
};

export default function AppPage(props) {
	const appName = props.match.params.appName;

	const [headers, setHeaders] = useState(null);
	const [data, setData] = useState(null);
	const [date, setDate] = useState(null);
	const [contents, setContents] = useState(null);
	const [issues, setIssues] = useState(null);
	const [images, setImages] = useState(null);
	const [hoverElement, setHoverElement] = useState(null);
	const [milestoneNonReleasesd, setMilestonesNonReleasesd] = useState(null);
	const [milestoneReleasesd, setMilestonesReleasesd] = useState(null);
	const [contributors, setContributors] = useState(null);

	async function getRepInfo() {
		fetch('https://api.github.com/repos/minecode/' + appName, {
			method: 'GET',
			headers: headers,
		})
			.then((res) => res.json())
			.then((data) => {
				setData(data);
			});
	}

	async function getContents() {
		fetch(
			'https://api.github.com/repos/minecode/' +
				appName +
				'/contents/minecode_settings.json?ref=master',
			{
				method: 'GET',
				headers: headers,
			}
		)
			.then((res) => res.json())
			.then((data) => {
				if (data.content !== undefined) {
					let temp_contents = JSON.parse(atob(data.content));
					setContents(temp_contents);
					if (temp_contents.play_console_images) {
						fetch(
							'https://api.github.com/repos/minecode/' +
								appName +
								'/contents/' +
								temp_contents.play_console_images +
								'?ref=master',
							{
								method: 'GET',
								headers: headers,
							}
						)
							.then((res) => res.json())
							.then((images) => {
								setImages(images);
							});
					}
				}
			});
	}

	async function getMilestones() {
		fetch(
			'https://api.github.com/repos/minecode/' +
				appName +
				'/milestones?state=close',
			{
				method: 'GET',
				headers: headers,
			}
		)
			.then((res) => res.json())
			.then((data) => {
				setMilestonesReleasesd(data);
			});

		fetch(
			'https://api.github.com/repos/minecode/' + appName + '/milestones',
			{
				method: 'GET',
				headers: headers,
			}
		)
			.then((res) => res.json())
			.then((data) => {
				setMilestonesNonReleasesd(data);
			});
	}

	async function getContributors() {
		fetch(
			'https://api.github.com/repos/minecode/' +
				appName +
				'/contributors',
			{
				method: 'GET',
				headers: headers,
			}
		)
			.then((res) => res.json())
			.then((data) => {
				data.forEach(async (element) => {
					fetch('https://api.github.com/users/' + element.login, {
						method: 'GET',
						headers: headers,
					})
						.then((res) => res.json())
						.then((user) => {
							element['user'] = user;
						});
				});
				setContributors(data);
			});
	}

	useEffect(() => {
		setHeaders(getHeader());
	}, []);

	useEffect(() => {
		if (headers) {
			getRepInfo();
			getMilestones();
		}
	// eslint-disable-next-line
	}, [headers]);

	useEffect(() => {
		if (data) {
			if (data.updated_at) {
				let temp_date = new Date(data.updated_at);
				setDate(
					temp_date.getDate() +
						'/' +
						(temp_date.getMonth() + 1) +
						'/' +
						temp_date.getFullYear()
				);
			}
			getContents();
			getContributors();
		}
	// eslint-disable-next-line
	}, [data]);

	useEffect(() => {
		if (contents) {
			fetch(
				'https://api.github.com/repos/minecode/' +
					appName +
					'/issues?status=open&labels=bug',
				{
					method: 'GET',
					headers: headers,
				}
			)
				.then((res) => res.json())
				.then((data) => {
					setIssues(data);
				});
		}
	}, [contents, appName, headers]);

	return (
		<div>
			<div
				className={'container-fluid'}
				style={{ backgroundColor: '#f1f1f1' }}
			>
				<div className={'container py-5'} style={{ color: '#212121' }}>
					{data && (
						<div>
							<div
								className={'row mx-2'}
								style={{ alignItems: 'center' }}
							>
								<h1>{titleCase(data.name)}</h1>
								<div className={'mx-2'}>
									<FontAwesomeIcon icon={faEye} />{' '}
									{data.subscribers_count}
								</div>

								<div className={'mx-2'}>
									<FontAwesomeIcon icon={faStar} />{' '}
									{data.stargazers_count}
								</div>
								<div className={'mx-2'}>
									<FontAwesomeIcon icon={faCodeBranch} />{' '}
									{data.forks}
								</div>
							</div>
							<div className={'row mx-2'}>{data.description}</div>
							<div
								style={{
									textAlign: 'center',
									marginBottom: 100,
									marginTop: 100,
								}}
							>
								{images &&
									images.map((image, k) => {
										if (k < 4) {
											return (
												<img
													alt='Github'
													key={k}
													style={{
														margin: 10,
														borderRadius: 20,
													}}
													width={200}
													src={image.download_url}
												/>
											);
										} else {
											return <></>;
										}
									})}
							</div>

							<div className={'row'}>
								<div
									className={'col-sm-12 col-md-6'}
									style={{
										textAlign: 'center',
									}}
								>
									{date && (
										<div className={'mx-2 mt-5'}>
											<div
												style={{
													color: '#212121',
												}}
											>
												Updated at {date}
											</div>
										</div>
									)}
									{contents && contents.link_mobile && (
										<a
											className={
												'mt-3 mx-2 mb-4 btn btn-sm btn-outline-primary'
											}
											href={
												contents.link_mobile.includes(
													'https://'
												) ||
												contents.link_mobile.includes(
													'http://'
												)
													? contents.link_mobile
													: 'https://' +
													  contents.link_mobile
											}
											rel='noopener noreferrer'
											target='_blank'
											type='button'
										>
											<img
												alt='Github'
												src={
													'/images/google-play-store.svg'
												}
												width={24}
												height={24}
											/>{' '}
											Get App
										</a>
									)}
									{contents && contents.link_website && (
										<a
											className={
												'mt-3 mx-2 mb-4 btn btn-sm btn-outline-primary'
											}
											href={
												contents.link_website.includes(
													'https://'
												) ||
												contents.link_website.includes(
													'http://'
												)
													? contents.link_website
													: 'https://' +
													  contents.link_website
											}
											rel='noopener noreferrer'
											target='_blank'
											type='button'
										>
											<img
												alt='Github'
												src={'/images/web-page.svg'}
												width={24}
												height={24}
											/>{' '}
											Website
										</a>
									)}
									{data && data.html_url && (
										<a
											className={
												'mt-3 mx-2 mb-4 btn btn-sm btn-outline-primary'
											}
											href={
												data.html_url.includes(
													'https://'
												) ||
												data.html_url.includes(
													'http://'
												)
													? data.html_url
													: 'https://' + data.html_url
											}
											rel='noopener noreferrer'
											target='_blank'
											type='button'
										>
											<img
												alt='Github'
												src={'/images/github.svg'}
												width={24}
												height={24}
											/>{' '}
											Github
										</a>
									)}
								</div>
								<div
									className={'col-sm-12 col-md-6'}
									style={{
										textAlign: 'center',
									}}
								>
									{issues &&
										issues.map((issue, i) => {
											return (
												<div
													key={i}
													className={'mx-2 my-3'}
												>
													<div>
														<a
															href={
																issue.html_url
															}
															target='_blank'
															rel='noopener noreferrer'
														>
															#{issue.number}{' '}
															{titleCase(
																issue.title
															)}
														</a>
														{issue.labels &&
															issue.labels.map(
																(label, j) => {
																	return (
																		<div
																			key={
																				j
																			}
																			className={
																				'btn btn-danger btn-sm m-1'
																			}
																		>
																			{
																				label.name
																			}
																		</div>
																	);
																}
															)}
														{issue.milestone && (
															<div>
																Implementação/Correção
																prevista em{' '}
																{
																	issue
																		.milestone
																		.title
																}
															</div>
														)}
													</div>
												</div>
											);
										})}
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
			<div
				className={'container-fluid'}
				style={{ backgroundColor: '#212121' }}
			>
				<div
					className={'container py-5 text-center'}
					style={{ color: '#f1f1f1' }}
				>
					<h2>Releases</h2>
					<div className={'row'} style={{ justifyContent: 'center' }}>
						{milestoneReleasesd &&
							milestoneReleasesd.map((element, i) => {
								if (i + 1 === milestoneReleasesd.length) {
									element['repository'] = appName;
									const releaseElement = getElement(
										'release',
										element
									);
									return getCard(
										i + '_1',
										releaseElement,
										hoverElement,
										setHoverElement
									);
								} else {
									return <></>;
								}
							})}
						{milestoneNonReleasesd &&
							milestoneNonReleasesd.map((element, i) => {
								if (i === 0) {
									element['repository'] = appName;
									const releaseElement = getElement(
										'release',
										element
									);
									return getCard(
										i + '_2',
										releaseElement,
										hoverElement,
										setHoverElement
									);
								} else {
									return <></>;
								}
							})}
					</div>
				</div>
			</div>
			<div
				className={'container-fluid'}
				style={{ backgroundColor: '#f1f1f1' }}
			>
				<div
					className={'container py-5 text-center'}
					style={{ color: '#212121' }}
				>
					<h2>Contributors</h2>
					<div className={'row'} style={{ justifyContent: 'center' }}>
						{contributors &&
							contributors.map((contributor, i) => {
								if (
									contributor.user &&
									contributor.login !== 'minecodebot'
								) {
									return (
										<div
											key={i}
											className={'mx-2'}
											style={{
												background: `linear-gradient(#21212190, #21212190), url(${contributor.user.avatar_url}`,
												backgroundSize: 'cover',
												backgroundPosition: 'center',
												backgroundColor: '#21212180',
												borderRadius: 20,
												height: 300,
												width: 200,
												textAlign: 'center',
												display: 'flex',
												justifyContent: 'space-around',
												flexDirection: 'column',
												alignItems: 'center',

												MsTransform:
													hoverElement === 'c_' + i
														? 'scale(1.1)'
														: 'scale(1.0)',
												MozTransform:
													hoverElement === 'c_' + i
														? 'scale(1.1)'
														: 'scale(1.0)',
												transform:
													hoverElement === 'c_' + i
														? 'scale(1.1)'
														: 'scale(1.0)',
												WebkitTransform:
													hoverElement === 'c_' + i
														? 'scale(1.1)'
														: 'scale(1.0)',
												OTransform:
													hoverElement === 'c_' + i
														? 'scale(1.1)'
														: 'scale(1.0)',

												transition: 'all .5s ease',
												WebkitTransition:
													'all .5s ease',
												MozTransition: 'all .5s ease',
											}}
											onMouseEnter={() => {
												setHoverElement('c_' + i);
											}}
											onMouseLeave={() => {
												setHoverElement(null);
											}}
										>
											<div style={{ color: '#f1f1f1' }}>
												{contributor.user.name}
											</div>
											<a
												type='button'
												className='mt-3 mb-4 btn btn-sm btn-secondary'
												href={contributor.html_url}
												target='_blank'
												style={
													{
														// borderColor: '#5ca4da',
													}
												}
												rel='noopener noreferrer'
											>
												<img
													src='/images/github.svg'
													alt='Github'
													width='24'
													height='24'
												/>
												<span
													style={{
														verticalAlign: 'middle',
													}}
												>
													{' '}
													GitHub
												</span>
											</a>
										</div>
									);
								} else {
									return <></>;
								}
							})}
					</div>
				</div>
			</div>
		</div>
	);
}
