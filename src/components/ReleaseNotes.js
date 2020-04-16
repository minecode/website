import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

ReleaseNotes.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			version: PropTypes.isRequired
		})
	}),
};

export default function ReleaseNotes(props) {

	const [milestone, setMilestones] = useState(null);
	const [issuesMilestones, setIssuesMilestones] = useState(null);
	const [issuesNonClosedMilestones, setIssuesNonClosedMilestones] = useState(null);
	
	const version = props.match.params.version;
	
	useEffect(() => {
		var authorizationBasic = window.btoa(process.env.REACT_APP_APIKEY);
		var header = new Headers();
		header.set('Authorization', 'Basic ' + authorizationBasic);
		fetch('https://api.github.com/repos/minecode/website/milestones/' + version, {
			method: 'GET', headers: header
		})
			.then(res => res.json())
			.then(data => {
				setMilestones(data);
			});
		fetch('https://api.github.com/repos/minecode/website/issues?state=closed&milestone=' + version, {
			method: 'GET', headers: header
		})
			.then(res1 => res1.json())
			.then(data1 => {
				setIssuesMilestones(data1);
			});
		fetch('https://api.github.com/repos/minecode/website/issues?milestone=' + version, {
			method: 'GET', headers: header
		})
			.then(res1 => res1.json())
			.then(data1 => {
				setIssuesNonClosedMilestones(data1);
			});
	
	}, []);

	return (
		<div className="container">
			<div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center" id="posts">
				<h1 className="display-4">Release Notes</h1>
			</div>
			<div id="" className="row">
				{milestone && [milestone].map((element, i) => {
					return(
						<div key={i}>
							{element.state === 'closed' ? <p>Released {element.title} at {element.closed_at}</p> : <p>Release {element.title} due on {element.due_on}</p>}
							<p style={{opacity: 0.5}}>{element.description}</p>
							<p>Open issues {element.open_issues}</p>
							<p>Closed issues {element.closed_issues}</p>
							<ul>
								{issuesMilestones && issuesMilestones.map((element, i) => {
									return(
										<li key={i}>
											<p>{element.title}</p><br/>
											<p style={{opacity: 0.5}}>{element.description}</p>
											<p style={{opacity: 0.5}}>{element.closed_at}</p>
										</li>
									);
								})}
								{issuesNonClosedMilestones && issuesNonClosedMilestones.map((element, i) => {
									return(
										<li key={i} style={{opacity:0.5}}>
											<p>{element.title}</p><br/>
											<p style={{opacity: 0.5}}>{element.description}</p>
											<p style={{opacity: 0.5}}>{element.created_at}</p>
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
