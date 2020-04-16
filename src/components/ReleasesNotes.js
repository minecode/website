import React, { useState, useEffect } from 'react';

function getDate(created_at) {
	var date = new Date(created_at);
	const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
		'July', 'August', 'September', 'October', 'November', 'December'
	];
	return date.getDate() + ' ' + monthNames[date.getMonth()] + ', ' + date.getFullYear();
}

export default function ReleasesNotes() {

	const [milestoneReleasesd, setMilestonesReleasesd] = useState(null);
	const [milestoneNonReleasesd, setMilestonesNonReleasesd] = useState(null);
	const [hoverElement, setHoverElement] = useState(null);
	
	useEffect(() => {
		var authorizationBasic = window.btoa(process.env.REACT_APP_APIKEY);
		var header = new Headers();
		header.set('Authorization', 'Basic ' + authorizationBasic);
		fetch('https://api.github.com/repos/minecode/website/milestones?state=close', {
			method: 'GET', headers: header
		})
			.then(res => res.json())
			.then(data => {
				setMilestonesReleasesd(data);
			});

		fetch('https://api.github.com/repos/minecode/website/milestones', {
			method: 'GET', headers: header
		})
			.then(res => res.json())
			.then(data => {
				setMilestonesNonReleasesd(data);
			});
	}, []);

	return (
		<div className="container">
			<div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center" id="posts">
				<h1 className="display-4">Releases Notes</h1>
			</div>
			<h2>Versions Released</h2>
			<div id="Releasesd" className="row justify-content-center">
				{milestoneReleasesd && milestoneReleasesd.map((element, i) => {
					return(
						<a
							key={i}
							className={
								'col-sm-12 col-md-3 btn mx-2 my-2 p-2 justify-content-center'
							}
							href={
								'/blog/post/' +
								element.number
							}
							onMouseEnter={() =>
								setHoverElement(i)
							}
							onMouseLeave={() =>
								setHoverElement(
									null
								)
							}
							style={{
								backgroundImage: 'linear-gradient(#00ff0090, #00000090), url(https://image.freepik.com/free-vector/flat-design-concept-rocket-launch_16734-61.jpg)',
								backgroundSize:
									'cover',
								backgroundPosition: 'center',
								backgroundColor: '#21212180',
								borderRadius: 20,
								border: 0,
								height:
									hoverElement ===
									i
										? 320
										: 300,
								transition:
									'all .5s ease',
								WebkitTransition:
									'all .5s ease',
								MozTransition:
									'all .5s ease',
							}}>
							<div style={{color: '#fff'}}>
								<p>Releases {element.title} at {getDate(element.closed_at)}</p><br/>
								<p style={{opacity: 0.5}}>{element.description}</p>
								<p>Open issues {element.open_issues}</p>
								<p>Closed issues {element.closed_issues}</p>
							</div>
						</a>
					);
				})}
			</div>
			<h2>Next Releases</h2>
			<div id="nonReleasesd" className="row justify-content-center">
				{milestoneNonReleasesd && milestoneNonReleasesd.map((element, i) => {
					return(
						<a
							key={i}
							className={
								'col-sm-12 col-md-3 btn mx-2 my-2 p-2 justify-content-center'
							}
							href={
								'/blog/post/' +
								element.number
							}
							onMouseEnter={() =>
								setHoverElement(i)
							}
							onMouseLeave={() =>
								setHoverElement(
									null
								)
							}
							style={{
								backgroundImage: 'linear-gradient(#ff000090, #00000090), url(https://image.freepik.com/free-vector/flat-design-concept-rocket-launch_16734-61.jpg)',
								backgroundSize:
									'cover',
								backgroundPosition: 'center',
								backgroundColor: '#21212180',
								borderRadius: 20,
								border: 0,
								height:
									hoverElement ===
									i
										? 320
										: 300,
								transition:
									'all .5s ease',
								WebkitTransition:
									'all .5s ease',
								MozTransition:
									'all .5s ease',
							}}>
							<div style={{color: '#fff'}}>
								<p>Releases {element.title} due on {getDate(element.due_on)}</p><br/>
								<p style={{opacity: 0.5}}>{element.description}</p>
								<p>Open issues {element.open_issues}</p>
								<p>Closed issues {element.closed_issues}</p>
							</div>
						</a>
					);
				})}
			</div>
		</div>
	);
}
