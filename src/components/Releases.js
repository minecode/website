import React, { useState, useEffect } from 'react';
import { getDate, getCard, getHeader } from './Utils';


export default function Releases() {

	const [hoverElement, setHoverElement] = useState(null);

	const [milestoneReleasesd, setMilestonesReleasesd] = useState(null);
	const [milestoneNonReleasesd, setMilestonesNonReleasesd] = useState(null);
	
	useEffect(() => {
		var header = getHeader();

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
					const href = '/release/' + element.number;
					const title = <div style={{color: '#fff'}}>
						<p>Releases {element.title} at {getDate(element.closed_at)}</p><br/>
						<p style={{opacity: 0.5}}>{element.description}</p>
						<p>Open issues {element.open_issues}</p>
						<p>Closed issues {element.closed_issues}</p>
					</div>;
					const background = 'linear-gradient(#00ff0090, #00000090), url(https://image.freepik.com/free-vector/flat-design-concept-rocket-launch_16734-61.jpg)';
					const footer = <></>;
					return(
						getCard(i + '_1', background, href, title, footer, hoverElement, setHoverElement)
					);
				})}
			</div>
			<h2>Next Releases</h2>
			<div id="nonReleasesd" className="row justify-content-center">
				{milestoneNonReleasesd && milestoneNonReleasesd.map((element, i) => {
					const href = '/release/' + element.number;
					const title = <div style={{color: '#fff'}}>
						<p>Releases {element.title} due on {getDate(element.due_on)}</p><br/>
						<p style={{opacity: 0.5}}>{element.description}</p>
						<p>Open issues {element.open_issues}</p>
						<p>Closed issues {element.closed_issues}</p>
					</div>;
					const background = 'linear-gradient(#ff000090, #00000090), url(https://image.freepik.com/free-vector/flat-design-concept-rocket-launch_16734-61.jpg)';
					const footer = <></>;
					return(
						getCard(i + '_2', background, href, title, footer, hoverElement, setHoverElement)
					);
				})}
			</div>
		</div>
	);
}
