import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { titleCase, getHeader } from './Utils';

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

	useEffect(() => {
		setHeaders(getHeader());
	}, []);

	useEffect(() => {
		if (headers) {
			getRepInfo();
		}
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
		}
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
	}, [contents]);

	return (
		<div>
			<div
				className={'container-fluid'}
				style={{ minHeight: 500, backgroundColor: '#f1f1f1' }}
			>
				<div
					className={'container py-5'}
					style={{ minHeight: 500, color: '#212121' }}
				>
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
													key={k}
													style={{
														margin: 10,
														borderRadius: 20,
													}}
													width={200}
													src={image.download_url}
												/>
											);
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
				style={{ minHeight: 500, backgroundColor: '#212121' }}
			>
				<div
					className={'container py-5'}
					style={{ minHeight: 500, color: '#f1f1f1' }}
				>
					<h1>Next release</h1>
					<h1>Last release</h1>
					<h1>Implemented</h1>
					<h1>In progress</h1>
				</div>
			</div>
			<div
				className={'container-fluid'}
				style={{ minHeight: 500, backgroundColor: '#f1f1f1' }}
			>
				<div
					className={'container py-5'}
					style={{ minHeight: 500, color: '#212121' }}
				>
					<h1>Contributors</h1>
					<div></div>
				</div>
			</div>
		</div>
	);
}
