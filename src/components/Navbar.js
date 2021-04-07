import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Navbar() {
	const [path, setPath] = useState(null);
	let location = useRouter();

	useEffect(() => {
		setPath(location.pathname);
	}, [location.pathname]);

	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
			<div className='container'>
				<a className='navbar-brand' href='/'>
					<img src='/images/logo.png' width='30' height='30' alt='' />
					<span> Minecode</span>
				</a>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarResponsive'
					aria-controls='navbarResponsive'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
			</div>
		</nav>
	);
}
