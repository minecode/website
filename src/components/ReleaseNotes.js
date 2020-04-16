import React, { useState, useEffect } from 'react';

export default function ReleaseNotes() {

	const [milestoneReleased, setMilestonesReleased] = useState(null);
	const [milestoneNonReleased, setMilestonesNonReleased] = useState(null);
	const [issuesMilestonesReleased, setIssuesMilestonesReleased] = useState(null);
	const [issuesMilestonesNonReleased, setIssuesMilestonesNonReleased] = useState(null);
	const [issuesNonClosedMilestonesNonReleased, setIssuesNonClosedMilestonesNonReleased] = useState(null);
	
	useEffect(() => {
		var authorizationBasic = window.btoa(process.env.REACT_APP_APIKEY);
		var header = new Headers();
		header.set('Authorization', 'Basic ' + authorizationBasic);
		fetch('https://api.github.com/repos/minecode/website/milestones?state=close', {
			method: 'GET', headers: header
		})
			.then(res => res.json())
			.then(data => {
				data.map(element => {
					fetch('https://api.github.com/repos/minecode/website/issues?state=closed&milestone=' + element.number, {
						method: 'GET', headers: header
					})
						.then(res1 => res1.json())
						.then(data1 => {
							setIssuesMilestonesReleased(data1);
						});
				});
				setMilestonesReleased(data);
			});

		fetch('https://api.github.com/repos/minecode/website/milestones', {
			method: 'GET', headers: header
		})
			.then(res => res.json())
			.then(data => {
				data.map(element => {
					fetch('https://api.github.com/repos/minecode/website/issues?state=closed&milestone=' + element.number, {
						method: 'GET', headers: header
					})
						.then(res1 => res1.json())
						.then(data1 => {
							setIssuesMilestonesNonReleased(data1);
						});
				});

				data.map(element => {
					fetch('https://api.github.com/repos/minecode/website/issues?milestone=' + element.number, {
						method: 'GET', headers: header
					})
						.then(res1 => res1.json())
						.then(data1 => {
							setIssuesNonClosedMilestonesNonReleased(data1);
						});
				});
				setMilestonesNonReleased(data);
			});
	}, []);

	return (
		<div className="container">
			<div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center" id="posts">
				<h1 className="display-4">Release Notes</h1>
			</div>
			<h2>Versions released</h2>
			<div id="released" className="row">
				{milestoneReleased && milestoneReleased.map((element, i) => {
					return(
						<div key={i}>
							<p>Release {element.title} at {element.closed_at}</p><br/>
							<p style={{opacity: 0.5}}>{element.description}</p>
							<p>Open issues {element.open_issues}</p>
							<p>Closed issues {element.closed_issues}</p>
							<ul>
								{issuesMilestonesReleased && issuesMilestonesReleased.map((element, i) => {
									return(
										<li key={i}>
											<p>{element.title}</p><br/>
											<p style={{opacity: 0.5}}>{element.description}</p>
											<p style={{opacity: 0.5}}>{element.closed_at}</p>
										</li>
									);
								})}
							</ul>
						</div>
					);
				})}
			</div>
			<h2>Next releases</h2>
			<div id="nonreleased" className="row">
				{milestoneNonReleased && milestoneNonReleased.map((element, i) => {
					return(
						<div key={i}>
							<p>Release {element.title} due on {element.due_on}</p><br/>
							<p style={{opacity: 0.5}}>{element.description}</p>
							<p>Open issues {element.open_issues}</p>
							<p>Closed issues {element.closed_issues}</p>
							<ul>
								{issuesMilestonesNonReleased && issuesMilestonesNonReleased.map((element, i) => {
									return(
										<li key={i}>
											<p>{element.title}</p><br/>
											<p style={{opacity: 0.5}}>{element.description}</p>
											<p style={{opacity: 0.5}}>{element.closed_at}</p>
										</li>
									);
								})}
								{issuesNonClosedMilestonesNonReleased && issuesNonClosedMilestonesNonReleased.map((element, i) => {
									return(
										<li key={i} style={{opacity:0.5}}>
											<p>{element.title}</p><br/>
											<p style={{opacity: 0.5}}>{element.description}</p>
										</li>
									);
								})}
							</ul>
						</div>
					);
				})}
			</div>
		</div>
	);
}
