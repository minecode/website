import React, { useState } from 'react';
import { getCard, getElement } from '../components/Utils';
import fetch from 'isomorphic-unfetch';

function Releases({ milestoneReleased, milestoneNonReleased }) {

	const [hoverElement, setHoverElement] = useState(null);

	return (
		
		<div className="container">
			<div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center" id="posts">
				<h1 className="display-4">Releases Notes</h1>
			</div>
			<h2>Versions Released</h2>
			<div id="Released" className="row justify-content-center">
				{milestoneReleased && milestoneReleased.map((element, i) => {
					const releaseElement = getElement('release', element);
					return(
						getCard(i + '_1', releaseElement, hoverElement, setHoverElement)
					);
				})}
			</div>
			<h2>Next Releases</h2>
			<div id="nonReleased" className="row justify-content-center">
				{milestoneNonReleased && milestoneNonReleased.map((element, i) => {
					const releaseElement = getElement('release', element); 
					return(
						getCard(i + '_2', releaseElement, hoverElement, setHoverElement)
					);
				})}
			</div>
		</div>
	);
}

export async function getStaticProps() {
	const res = await fetch('https://minecode.herokuapp.com/minecode/website/milestones/close');
	const json = await res.json();
	
	const res2 = await fetch('https://minecode.herokuapp.com/minecode/website/milestones');
	const json2 = await res2.json();

	return { props: {milestoneReleased: json, milestoneNonReleased: json2 }};
}

export default Releases;
