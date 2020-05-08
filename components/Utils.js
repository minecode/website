import React from 'react';
import { faStar, faCertificate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Link from 'next/link'

export function getHeader() {
	var authorizationBasic = window.btoa(process.env.REACT_APP_APIKEY);
	var header = new Headers();
	header.set('Authorization', 'Basic ' + authorizationBasic);
	return header;
}

export function getDiffDates(date1, date2) {
	const diffTime = Math.abs(date2 - date1);
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
	return diffDays;
}

export function addPost(issue) {
	var card = document.createElement('div');
	card.setAttribute('class', 'col-12');
	var header = document.createElement('div');
	var title = document.createElement('h3');
	var link = document.createElement('Link');
	title.setAttribute('class', 'my-0 font-weight-normal');
	link.setAttribute('href', './blog/post/[id]');
	link.setAttribute('as', './blog/post/' + issue.number + '');
	var text = document.createTextNode(issue.title.split(/\[\w*\] /)[1]);
	link.append(text);
	title.append(link);
	header.append(title);
	var body = document.createElement('div');
	body.setAttribute(
		'class',
		'd-flex align-middle justify-content-center align-items-center'
	);
	var userLogoDiv = document.createElement('div');
	userLogoDiv.setAttribute('class', 'align-self-center p-2');
	var infoPostDiv = document.createElement('div');
	infoPostDiv.setAttribute('class', 'align-self-center p-2');
	var date = new Date(issue.created_at);
	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];
	date = monthNames[date.getMonth()] + ', ' + date.getFullYear();
	var info = document.createElement('p');
	info.append('Posted on ' + date);
	info.append(' by ' + issue.user.login);
	var githubLink = document.createElement('a');
	githubLink.setAttribute('class', 'mt-3 mb-4 btn btn-sm');
	githubLink.setAttribute('href', 'https://github.com/' + issue.user.login);
	githubLink.setAttribute('target', '_blank');
	githubLink.setAttribute('style', 'color: #000"');
	var githubLogo = document.createElement('img');
	githubLogo.setAttribute('src', '/images/github.svg');
	githubLogo.setAttribute('alt', 'Github');
	githubLogo.setAttribute('width', '14');
	githubLogo.setAttribute('height', '14');
	githubLink.append(githubLogo);
	info.append(githubLink);
	infoPostDiv.append(info);
	body.append(infoPostDiv);
	card.append(header);
	card.append(body);
	return card;
}

export function addIssue(issue) {
	var card = document.createElement('div');
	card.setAttribute('class', 'card mb-4 box-shadow');
	var header = document.createElement('div');
	header.setAttribute('class', 'card-header');
	var title = document.createElement('h5');
	title.setAttribute('class', 'my-0 font-weight-normal');
	var text = document.createTextNode(issue.title.split(/\[\w*\] /)[1]);
	title.append(text);
	header.append(title);
	var body = document.createElement('div');
	body.setAttribute('class', 'card-body');
	var date = document.createElement('p');
	date.setAttribute('style', 'opacity:0.5; font-size:12px');
	text = document.createTextNode(issue.created_at.substring(0, 10));
	date.append(text);
	body.append(date);
	var description = document.createElement('div');
	description.setAttribute('class', 'mt-3 mb-3');
	text = document.createTextNode(issue.body);
	description.append(text);
	body.append(description);
	var status = document.createElement('div');
	text = document.createTextNode(
		issue.state.charAt(0).toUpperCase() + issue.state.slice(1)
	);
	if (issue.state === 'open')
		status.setAttribute('class', 'mt-3 mb-4 btn btn-sm btn-success');
	else status.setAttribute('class', 'mt-3 mb-4 btn btn-sm btn-danger');
	status.append(text);
	body.append(status);
	var labels = document.createElement('div');
	labels.setAttribute('class', 'text-center');
	issue.labels.forEach((label) => {
		var lab = document.createElement('div');
		lab.setAttribute('class', 'm-1 btn btn-sm btn-outline-primary');
		text = document.createTextNode(label.name);
		lab.append(text);
		labels.append(lab);
	});
	body.append(labels);
	card.append(header);
	card.append(body);
	return card;
}

export function titleCase(str) {
	str = str.split('_').join(' ');
	var splitStr = str.toLowerCase().split(' ');
	for (var i = 0; i < splitStr.length; i++) {
		// You do not need to check if i is larger than splitStr length, as your for does that for you
		// Assign it back to the array
		splitStr[i] =
			splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
	}
	// Directly return the joined string
	return splitStr.join(' ');
}

export function getDate(date) {
	var dateFinal = new Date(date);
	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];
	return monthNames[dateFinal.getMonth()] + ', ' + dateFinal.getFullYear();
}

export function getCard(i, element, hoverElement, setHoverElement) {
	const background = element[3];
	const title = element[2];
	const href = element[0];
	const as = element[1];
	const footer = element[4];
	return (
		<Link href={href} as={as}>
		<div
			key={i}
			className={
				'col-sm-12 col-md-3 btn mx-2 my-2 p-2 justify-content-center'
			}
			onMouseEnter={() => setHoverElement(i)}
			onMouseLeave={() => setHoverElement(null)}
			style={{
				backgroundImage: background,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundColor: '#21212180',
				borderRadius: 20,
				border: 0,
				height: 300,

				MsTransform: hoverElement === i ? 'scale(1.1)' : 'scale(1.0)',
				MozTransform: hoverElement === i ? 'scale(1.1)' : 'scale(1.0)',
				transform: hoverElement === i ? 'scale(1.1)' : 'scale(1.0)',
				WebkitTransform:
					hoverElement === i ? 'scale(1.1)' : 'scale(1.0)',
				OTransform: hoverElement === i ? 'scale(1.1)' : 'scale(1.0)',

				display: 'block',

				transition: 'all .5s ease',
				WebkitTransition: 'all .5s ease',
				MozTransition: 'all .5s ease',
			}}
		>
			<div
				className='col-12'
				style={{
					position: 'relative',
					top: '10px',
					color: '#f1f1f1',
					fontSize: 16,
					fontWeight: 100,
				}}
			>
				{title}
			</div>
			<br />
			<p
				className='col-12'
				style={{
					color: '#f1f1f1',
					position: 'absolute',
					bottom: 10,
					left: 0,
					right: 0,
					fontSize: 12,
					opacity: 0.8,
				}}
			>
				{footer}
			</p>
		</div>
		</Link>
	);
}

export function getElement(type, element) {
	if (type === 'post') {
		const href = '/blog/post/[id]';
		const as = '/blog/post/' + element.number;
		var title = element.title.split(/\[\w*\] /)[1];
		element.labels.filter(e => e.name === 'highlight').length > 0 & getDiffDates(new Date(element.closed_at), new Date()) <= 2 ? 
			title = (<>{element.title.split(/\[\w*\] /)[1]} <br/><div className="m-1 btn btn-sm btn-outline-light btn-sm bordered"><FontAwesomeIcon icon={faStar} />{' '}Destaque</div><div className="m-1 btn btn-sm btn-outline-light btn-sm bordered"><FontAwesomeIcon icon={faCertificate} />{' '}Novo</div></>)
			: element.labels.filter(e => e.name === 'highlight').length > 0 ? 
				title = (<>{element.title.split(/\[\w*\] /)[1]} <br/><div className="m-1 btn btn-sm btn-outline-light btn-sm bordered"><FontAwesomeIcon icon={faStar} />{' '}Destaque</div></>)
				: getDiffDates(new Date(element.closed_at), new Date()) <= 2 ?
					title = (<>{element.title.split(/\[\w*\] /)[1]} <br/><div className="m-1 btn btn-sm btn-outline-light btn-sm bordered"><FontAwesomeIcon icon={faCertificate} />{' '}Novo</div></>)
					: title = <>{element.title.split(/\[\w*\] /)[1]}</>;
		const background = element.body.match(/(?:!\[(.*?)\]\((.*?)\))/g)
			? `linear-gradient(#21212190, #21212190), url(${
				element.body
					.match(/(?:!\[(.*?)\]\((.*?)\))/g)[0]
					.split('(')[1]
					.split(')')[0]
			})`
			: null;
		const footer = (
			<>
				Posted on {getDate(element.created_at)} by {element.user.login}{' '}
				<a
					href={'https://github.com/' + element.user.login}
					target='_blank'
					rel='noopener noreferrer'
					style={{ color: '#fff' }}
				>
					<img
						className='rounded-circle'
						src={element.user.avatar_url}
						alt='Github'
						width='16'
						height='16'
					></img>
				</a>
			</>
		);
		return [href, as, title, background, footer];
	} else if (type === 'app') {
		const href = '/app/[id]';
		const as = '/app/' + element.name;
		const title = titleCase(element.name);
		const background = `linear-gradient(#21212190, #21212190), url(${
			'https://raw.githubusercontent.com/minecode/' +
			element.name +
			'/master/' +
			element.minecode_settings.image
		})`;
		const date = new Date(element.updated_at);
		const footer = (
			<>
				Last update at{' '}
				{date.getDate() +
					'/' +
					(date.getMonth() + 1) +
					'/' +
					date.getFullYear()}
			</>
		);
		return [href, as, title, background, footer];
	} else if (type === 'release') {
		const href = '/release/[repository]/[id]';
		const as = element.repository
			? '/release/' + element.repository + '/' + element.number
			: '/release/website/' + element.number;
		const title = (
			<div style={{ color: '#fff' }}>
				<p>
					Release {element.title}{' '}
					{element.state === 'closed'
						? 'at ' + getDate(element.closed_at)
						: 'due on ' + getDate(element.due_on)}
				</p>
				<br />
				<p>Open issues {element.open_issues}</p>
				<p>Closed issues {element.closed_issues}</p>
			</div>
		);
		var background =
			'linear-gradient(#ff000090, #00000090), url(https://image.freepik.com/free-vector/flat-design-concept-rocket-launch_16734-61.jpg)';
		if (element.state === 'closed') {
			background =
				'linear-gradient(#00ff0090, #00000090), url(https://image.freepik.com/free-vector/flat-design-concept-rocket-launch_16734-61.jpg)';
		}
		const footer = <></>;
		return [href, as, title, background, footer];
	}
}

export function getListCards(post, hoverElement, setHoverElement) {
	return (
		<div className='container'>
			<div
				className='px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center'
				id='posts'
			>
				<h1 className='display-4'>Blog</h1>
				<p className='lead'>Minecode Posts</p>
			</div>
			<div id='posts_list' className='row justify-content-center'>
				{post &&
					post.map((element, i) => {
						var isPost = false;
						element.labels.forEach((element) => {
							if (element.name === 'post') {
								isPost = true;
								return;
							}
						});
						if (isPost) {
							const postElement = getElement('post', element);
							return getCard(
								i,
								postElement,
								hoverElement,
								setHoverElement
							);
						} else {
							return <></>;
						}
					})}
			</div>
		</div>
	);
}

export function getTitle(title) {
	return (
		<div className='p-5 row text-center'>
			<h1 className='col-12'>{title}</h1>
		</div>
	);
}
