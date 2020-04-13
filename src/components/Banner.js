import React, { useState, useEffect } from 'react';

export default function Banner() {
	const [color, setColor] = useState('red');
	const [element, setElement] = useState('blog');

	useEffect(() => {
		if (element) {
			switch (element) {
			case 'blog':
				setColor('red');
				break;
			case 'ocean_king':
				setColor('yellow');
				break;
			case 'shopping_cart':
				setColor('blue');
				break;
			case 'pet_find':
				setColor('green');
				break;
			default:
				setColor('white');
				break;
			}
		}
	}, [element]);

	return (
		<div
			className={'container-fluid'}
			style={{
				backgroundColor: color,
				height: '500px',
			}}>
			<div className={'container'} style={{ height: '100%' }}>
				<div className={'row py-5'} style={{ height: '100%' }}>
					<div className={'col-sm-3'}>
						<ul
							style={{
								display: 'grid',
								height: '100%',
								justifyContent: 'center',
								alignItems: 'center',
							}}>
							<li
								className={'btn'}
								onClick={() => {
									setElement('blog');
								}}>
								Blog
							</li>
							<li
								className={'btn'}
								onClick={() => {
									setElement('ocean_king');
								}}>
								Ocean King
							</li>
							<li
								className={'btn'}
								onClick={() => {
									setElement('shopping_cart');
								}}>
								Shopping cart
							</li>
							<li
								className={'btn'}
								onClick={() => {
									setElement('pet_find');
								}}>
								Pet find
							</li>
						</ul>
					</div>
					<div
						className={'col-sm-9'}
						style={{
							height: '100%',
							justifyContent: 'center',
							alignItems: 'center',
						}}>
						{element && (
							<div
								style={{
									display: 'flex',
									height: '100%',
									justifyContent: 'center',
									alignItems: 'center',
								}}>
								{element}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
