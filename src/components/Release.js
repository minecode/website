import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getHeader, getDate, getTitle } from './Utils';

Release.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			version: PropTypes.isRequired
		})
	}),
};

export default function Release(props) {

	const [milestone, setMilestones] = useState(null);
	const [issuesMilestones, setIssuesMilestones] = useState(null);
	const [issuesNonClosedMilestones, setIssuesNonClosedMilestones] = useState(null);
	
	const version = props.match.params.version;
	
	useEffect(() => {
		var header = getHeader();
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
			{getTitle('Release Notes')}
			{milestone && [milestone].map((element) => {
				return(
					<>
						<div className="row text-center">
							<h2 className="col-12">
								Version  {element.title} {element.state === 'closed' ? ' released at ' + getDate(element.closed_at) : ' due on ' + getDate(element.due_on)}
							</h2>
							<p className="col-12" style={{opacity: 0.5}}>{element.description}</p>
							<p className="col-12">Open issues {element.open_issues}<br/>Closed issues {element.closed_issues}</p>
						</div>
						<ul className="row">
							{issuesMilestones && issuesNonClosedMilestones && issuesMilestones.concat(issuesNonClosedMilestones).map((element2, i) => {
								return(
									<li key={i} className="col-6">
										<p><span style={{
											opacity: element2.state === 'closed' ? 1 : 0.5
										}}>{element2.title}</span>
										{ element2.labels.map((element3, i) => {
											return(
												<a key={i} className="m-1 btn btn-sm btn-primary" style={{backgroundColor: '#' + element3.color, border: 'none'}}>
													{element3.name}
												</a>
											);
										})}</p>
										<p style={{opacity: 0.5}}>{element2.state === 'closed' ? getDate(element2.closed_at) : getDate(element.due_on)}</p>
										<p style={{opacity: 0.5}}>{element2.description}</p>
									</li>
								);
							})}
						</ul>
					</>
				);
			})}
		</div>
	);
}
