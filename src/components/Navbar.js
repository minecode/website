import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function Navbar() {
	const [path, setPath] = useState(null);
	let location = useLocation();

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
				<div className='collapse navbar-collapse' id='navbarResponsive'>
					<ul className='navbar-nav ml-auto'>
						<li
							className={path && 
								path === '/' ? 'nav-item active' : 'nav-item'
							}>
							<a className='nav-link' href='/'>
								Home
							</a>
						</li>
						<li
							className={path && 
								path.includes('/blog')
								? 'nav-item active'
								: 'nav-item'
							}>
							<a className='nav-link' href='/blog'>
								Blog
							</a>
						</li>
						<li
							className={path &&
								path === '/ideas'
								? 'nav-item active'
								: 'nav-item'
							}>
							<a className='nav-link' href='/ideas'>
								Ideas
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
