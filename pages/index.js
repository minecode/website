import React from 'react';
import Team from '../components/Team';
import Banner from '../components/Banner';
import fetch from 'isomorphic-unfetch';

function Home({ posts, labels }) {
	return (
		<div>
			<Banner posts={posts} labels={labels} />
			<div className={'container-fluid py-5'}>
				<div className={'container'}>
					<div className='row' style={{ alignItems: 'center' }}>
						<div className={'col-sm-12 col-md-8 px-2'}>
							<div className={'col-12 px-5'}>
								<h2
									style={{
										color: '#323232',
									}}>
									Desenvolvimento de aplicações web e
									mobile.
								</h2>
							</div>
							<p
								className={'col-12 px-5 py-3'}
								style={{
									color: '#2d4f69',
								}}>
								Aplicações criadas e pensadas para o
								utilizador final, tendo sempre em conta a
								estrutura funcional e visual da aplicação.
							</p>
						</div>
						<div
							className={
								'col-sm-12 col-md-4 text-center px-2'
							}>
							<img
								style={{ maxWidth: '100%', height: 'auto' }}
								src={'./images/home_1.png'}
								alt='Home'
							/>
						</div>
					</div>
				</div>
			</div>

			<div
				className={'container-fluid py-5'}
				style={{ backgroundColor: '#5ca4da' }}>
				<div className={'container'}>
					<div
						className='row'
						style={{
							alignItems: 'center',
						}}>
						<div
							className={
								'col-sm-12 col-md-4 text-center px-2'
							}>
							<img
								style={{ maxWidth: '100%', height: 'auto' }}
								src={'./images/home_2.png'}
								alt='Home'
							/>
						</div>
						<div className={'col-sm-12 col-md-8 px-2'}>
							<div className={'col-12 px-5'}>
								<h2
									style={{
										color: '#f1f1f1',
									}}>
									As tecnologias mais usadas e com maior
									tendência.
								</h2>
							</div>
							<p
								className={'col-12 px-5 py-3'}
								style={{
									color: '#f1f1f1',
								}}>
								Selecionamos e usamos as tecnologias que
								melhor se adaptam ao projeto e às suas
								necessidades.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className={'container-fluid py-5'}>
				<div className={'container'}>
					<div className='row' style={{ alignItems: 'center' }}>
						<div className={'col-sm-12 col-md-8 px-2'}>
							<div className={'col-12 px-5'}>
								<h2
									style={{
										color: '#323232',
									}}>
									Transparência e partilha de
									conhecimento.
								</h2>
							</div>
							<p
								className={'col-12 px-5 py-3'}
								style={{
									color: '#2d4f69',
								}}>
								Como principal objetivo de criar uma
								comunidade open source para criação de
								aplicações inovadoras e partilha de
								conhecimentos.
							</p>
						</div>
						<div
							className={
								'col-sm-12 col-md-4 text-center px-2'
							}>
							<img
								style={{ maxWidth: '100%', height: 'auto' }}
								src={'./images/home_3.png'}
								alt='Home'
							/>
						</div>
					</div>
				</div>
			</div>
			<Team />
		</div>
	);
}

export async function getStaticProps() {
	const res = await fetch('https://minecode.herokuapp.com/github/repos/minecode/minecode.github.io/issues/closed');
	const json = await res.json();
	
	const res2 = await fetch('https://minecode.herokuapp.com/github/repos/minecode/minecode.github.io/labels');
	const json2 = await res2.json();

	return { props: {posts: json, labels: json2 }};
}

export default Home;