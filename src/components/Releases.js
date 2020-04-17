import React, { useState, useEffect } from 'react';
import { getCard, getHeader, getElement } from './Utils';


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
					const releaseElement = getElement('release', element);
					return(
						getCard(i + '_1', releaseElement, hoverElement, setHoverElement)
					);
				})}
			</div>
			<h2>Next Releases</h2>
			<div id="nonReleasesd" className="row justify-content-center">
				{milestoneNonReleasesd && milestoneNonReleasesd.map((element, i) => {
					const releaseElement = getElement('release', element); 
					return(
						getCard(i + '_2', releaseElement, hoverElement, setHoverElement)
					);
				})}
			</div>
		</div>
	);
}
