import React, { useState, useEffect } from 'react';
import { getHeader, getDate, getTitle } from '../../../components/Utils';
import { useRouter } from 'next/router'

const release = () => {

	const [milestone, setMilestones] = useState(null);
	const [issuesMilestones, setIssuesMilestones] = useState(null);
	const [issuesNonClosedMilestones, setIssuesNonClosedMilestones] = useState(
		null
	);

	const router = useRouter()
    const { id, repository } = router.query

	useEffect(() => {
        if (id !== undefined && repository !== undefined) {
		var header = getHeader();
		fetch(
			'https://api.github.com/repos/minecode/' + repository +
				'/milestones/' +
				id,
			{
				method: 'GET',
				headers: header,
			}
		)
			.then((res) => res.json())
			.then((data) => {
				setMilestones(data);
			});
		fetch(
			'https://api.github.com/repos/minecode/' + repository +
				'/issues?state=closed&milestone=' +
				id,
			{
				method: 'GET',
				headers: header,
			}
		)
			.then((res1) => res1.json())
			.then((data1) => {
				setIssuesMilestones(data1);
			});
		fetch(
			'https://api.github.com/repos/minecode/' + repository +
				'/issues?milestone=' +
				id,
			{
				method: 'GET',
				headers: header,
			}
		)
			.then((res1) => res1.json())
			.then((data1) => {
				setIssuesNonClosedMilestones(data1);
            });
        }
	}, [repository, id]);

	return (
		<div className='container'>
			{getTitle('Release Notes')}
			{milestone &&
				[milestone].map((element) => {
					return (
						<>
							<div className='row text-center'>
								<h2 className='col-12'>
									Version {element.title}{' '}
									{element.state === 'closed'
										? ' released at ' +
										getDate(element.closed_at)
										: ' due on ' + getDate(element.due_on)}
								</h2>
								<p className='col-12' style={{ opacity: 0.5 }}>
									{element.description}
								</p>
								<p className='col-12'>
									Open issues {element.open_issues}
									<br />
									Closed issues {element.closed_issues}
								</p>
							</div>
							<ul className='row'>
								{issuesMilestones &&
									issuesNonClosedMilestones &&
									issuesMilestones
										.concat(issuesNonClosedMilestones)
										.map((element2, i) => {
											return (
												<li key={i} className='col-6'>
													<p>
														<span
															style={{
																opacity:
																	element2.state ===
																	'closed'
																		? 1
																		: 0.5,
															}}
														>
															{element2.title}
														</span>
														{element2.labels.map(
															(element3, i) => {
																return (
																	<div
																		key={i}
																		className='m-1 btn btn-sm btn-primary'
																		style={{
																			backgroundColor:
																				'#' +
																				element3.color,
																			border:
																				'none',
																		}}
																	>
																		{
																			element3.name
																		}
																	</div>
																);
															}
														)}
													</p><br/>
													<p style={{ opacity: 0.5 }}>
														{element2.body}
													</p><br/>
													<p style={{ opacity: 0.5 }}>
														{element2.state ===
														'closed'
															? getDate(
																element2.closed_at
															)
															: getDate(
																element.due_on
															)}
													</p>
													
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

export default release;