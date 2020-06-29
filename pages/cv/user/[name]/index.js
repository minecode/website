import React from 'react';

import { useRouter } from 'next/router';

const user = () => {
	const router = useRouter();
	const { name } = router.query;

	return (
		<>
			{name === 'fhenriques' && (
				<div className={'container-fluid py-5'}>
					<div className={'container'}>
						<div className='row' style={{ alignItems: 'center' }}>
							<div className={'col-sm-12 col-md-8 px-2'}>
								<div className={'col-12 px-5'}>
									<h2
										style={{
											color: '#323232',
										}}>
										{name === 'fhenriques' && (
											<>Fábio Henriques</>
										)}
									</h2>
								</div>
								<p
									className={'col-12 px-5 pt-3'}
									style={{
										color: '#2d4f69',
									}}>
									Licenciado em Matemática e aplicações (Minor
									em computação e informática) pela
									Universidade de Aveiro.
								</p>
								<p
									className={'col-12 px-5'}
									style={{
										color: 'grey',
										fontSize: 12,
									}}>
									Software Developer na empresa{' '}
									<a
										style={{
											color: 'grey',
											fontSize: 12,
											fontWeight: 'bold',
										}}
										href='https://www.humanprofiler.com'
										target='_blank'>
										Human Profiler
									</a>
								</p>
							</div>
							<div
								className={
									'col-sm-12 col-md-4 text-center px-2'
								}>
								{name === 'fhenriques' && (
									<img
										src='https://avatars2.githubusercontent.com/u/17369918?s=460&u=fb012ff17e73a2b66f7f71b747907db27d8f51b9&v=4'
										className='rounded-circle'
										alt='Fábio Henriques'
										style={{
											maxWidth: '100%',
											height: 'auto',
										}}
									/>
								)}
							</div>
						</div>
					</div>
				</div>
			)}
			{name === 'fhenriques' && (
				<div
					className={'container-fluid py-5'}
					style={{ backgroundColor: '#5ca4da' }}>
					<div className={'container'}>
						<div
							className='row'
							style={{
								alignItems: 'center',
							}}>
							<div className={'col-sm-12 col-md-12 px-2'}>
								<div className={'col-12 px-5'}>
									<h2
										style={{
											color: '#f1f1f1',
										}}>
										Experiências
									</h2>
								</div>
								<p
									className={'col-12 px-5 py-0 mb-0'}
									style={{
										color: '#f1f1f1',
									}}>
									R&D Software Developer, Human Profiler
								</p>
								<p
									className={'col-12 px-5 py-0 my-0 pb-3'}
									style={{
										color: '#f1f1f1',
										fontSize: 15,
									}}>
									Responsável pelo desenvolvimento de
									aplicações mobile em React Native, API´s
									REST com a framework django-rest-framework e
									integração com os serviços AWS.
								</p>
								<div className={'col-12 px-5 py-0 my-0 pb-3'}>
									<img
										className={'pr-2'}
										src='/images/react.png'
										alt='ReactJS'
										style={{
											maxWidth: 'auto',
											height: '40px',
										}}
									/>
									<img
										className={'px-2'}
										src='/images/html.png'
										alt='HTML'
										style={{
											maxWidth: 'auto',
											height: '40px',
										}}
									/>
									<img
										className={'px-2'}
										src='/images/css.png'
										alt='CSS'
										style={{
											maxWidth: 'auto',
											height: '40px',
										}}
									/>
									<img
										className={'px-2'}
										src='/images/js.png'
										alt='JS'
										style={{
											maxWidth: 'auto',
											height: '40px',
										}}
									/>
									<img
										className={'px-2'}
										src='/images/python.png'
										alt='Python'
										style={{
											maxWidth: 'auto',
											height: '40px',
										}}
									/>
									<img
										className={'px-2'}
										src='/images/django.png'
										alt='Django'
										style={{
											maxWidth: 'auto',
											height: '40px',
										}}
									/>
									<img
										className={'px-2'}
										src='/images/pg.png'
										alt='Postgres'
										style={{
											maxWidth: 'auto',
											height: '40px',
										}}
									/>
									<img
										className={'px-2'}
										src='/images/aws.png'
										alt='AWS'
										style={{
											maxWidth: 'auto',
											height: '40px',
										}}
									/>
								</div>
								<p
									className={'col-12 px-5 py-0 mb-0'}
									style={{
										color: '#f1f1f1',
									}}>
									Bolseiro de investigação, CIDMA, UA
								</p>
								<p
									className={'col-12 px-5 py-0 my-0 pb-3'}
									style={{
										color: '#f1f1f1',
										fontSize: 15,
									}}>
									Desenvolvimento da aplicação web{' '}
									<a
										style={{
											color: '#f1f1f1',
											fontWeight: 'bold',
										}}
										href='https://siacua.web.ua.pt/'>
										SIACUA
									</a>{' '}
									em C# e .NET Desenvolvimento de uma
									aplicação Web em Django de parametrização de
									exercícios matemáticos
								</p>
								<div className={'col-12 px-5 py-0 my-0 pb-3'}>
									<img
										className={'px-2'}
										src='/images/html.png'
										alt='HTML'
										style={{
											maxWidth: 'auto',
											height: '40px',
										}}
									/>
									<img
										className={'px-2'}
										src='/images/css.png'
										alt='CSS'
										style={{
											maxWidth: 'auto',
											height: '40px',
										}}
									/>
									<img
										className={'px-2'}
										src='/images/js.png'
										alt='JS'
										style={{
											maxWidth: 'auto',
											height: '40px',
										}}
									/>
									<img
										className={'px-2'}
										src='/images/python.png'
										alt='Python'
										style={{
											maxWidth: 'auto',
											height: '40px',
										}}
									/>
									<img
										className={'px-2'}
										src='/images/django.png'
										alt='Django'
										style={{
											maxWidth: 'auto',
											height: '40px',
										}}
									/>
									<img
										className={'px-2'}
										src='/images/csharp.png'
										alt='C#'
										style={{
											maxWidth: 'auto',
											height: '40px',
										}}
									/>
									<img
										className={'px-2'}
										src='/images/sqls.png'
										alt='SQLS'
										style={{
											maxWidth: 'auto',
											height: '40px',
										}}
									/>
								</div>
								<p
									className={'col-12 px-5 py-0 mb-0'}
									style={{
										color: '#f1f1f1',
									}}>
									Organizador do ENEMath 2018
								</p>
								<p
									className={'col-12 px-5 py-0 my-0 pb-3'}
									style={{
										color: '#f1f1f1',
										fontSize: 15,
									}}>
									Responsável pelo desenvolvimento do website
									para o encontro nacional de estudades de
									matemática, sistema de inscrições e
									backoffice de apoio aos organizadores do
									evento.
								</p>
								<div className={'col-12 px-5 py-0 my-0 pb-3'}>
									<img
										className={'px-2'}
										src='/images/html.png'
										alt='HTML'
										style={{
											maxWidth: 'auto',
											height: '40px',
										}}
									/>
									<img
										className={'px-2'}
										src='/images/css.png'
										alt='CSS'
										style={{
											maxWidth: 'auto',
											height: '40px',
										}}
									/>
									<img
										className={'px-2'}
										src='/images/js.png'
										alt='JS'
										style={{
											maxWidth: 'auto',
											height: '40px',
										}}
									/>
									<img
										className={'px-2'}
										src='/images/php.png'
										alt='PHP'
										style={{
											maxWidth: 'auto',
											height: '40px',
										}}
									/>
									<img
										className={'px-2'}
										src='/images/phpmyadmin.png'
										alt='Phpmyadmin'
										style={{
											maxWidth: 'auto',
											height: '40px',
										}}
									/>
								</div>
								<p
									className={'col-12 px-5 py-0 mb-0'}
									style={{
										color: '#f1f1f1',
									}}>
									Bolseiro de investigação, CIDMA, UA
								</p>
								<p
									className={'col-12 px-5 py-0 my-0 pb-3'}
									style={{
										color: '#f1f1f1',
										fontSize: 15,
									}}>
									LEMA project - Desenvolvimento de jogos
									digitais dedicados a crianças com autismo,
									em JavaScript com o software{' '}
									<a
										href='https://nunustudio.org/'
										taget='_blank'>
										nunuStudio
									</a>
								</p>
								<div className={'col-12 px-5 py-0 my-0 pb-3'}>
									<img
										className={'px-2'}
										src='/images/js.png'
										alt='JS'
										style={{
											maxWidth: 'auto',
											height: '40px',
										}}
									/>
								</div>
								<p
									className={'col-12 px-5 py-0 mb-0'}
									style={{
										color: '#f1f1f1',
									}}>
									Colaborador no Núcleo de estudantes de
									Matemática, UA
								</p>
								<p
									className={'col-12 px-5 py-0 my-0 pb-3'}
									style={{
										color: '#f1f1f1',
										fontSize: 15,
									}}>
									Responsável pelo desenvolvimento do website
									do núcleo de estudades de matemática e da
									plataforma de apontamentos de matemática
									destinada aos estudantes dos cursos da
									licenciatura em matemática e mestrado em
									matemática.
								</p>
								<div className={'col-12 px-5 py-0 my-0 pb-3'}>
									<img
										className={'px-2'}
										src='/images/html.png'
										alt='HTML'
										style={{
											maxWidth: 'auto',
											height: '40px',
										}}
									/>
									<img
										className={'px-2'}
										src='/images/css.png'
										alt='CSS'
										style={{
											maxWidth: 'auto',
											height: '40px',
										}}
									/>
									<img
										className={'px-2'}
										src='/images/js.png'
										alt='JS'
										style={{
											maxWidth: 'auto',
											height: '40px',
										}}
									/>
									<img
										className={'px-2'}
										src='/images/php.png'
										alt='PHP'
										style={{
											maxWidth: 'auto',
											height: '40px',
										}}
									/>
									<img
										className={'px-2'}
										src='/images/phpmyadmin.png'
										alt='Phpmyadmin'
										style={{
											maxWidth: 'auto',
											height: '40px',
										}}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
			{name === 'fhenriques' && (
				<div className={'container-fluid py-5'}>
					<div className={'container'}>
						<div className='row' style={{ alignItems: 'center' }}>
							<div className={'col-sm-12 col-md-8 px-2'}>
								<div className={'col-12 px-5'}>
									<h2
										style={{
											color: '#323232',
										}}>
										Projetos
									</h2>
								</div>
								<p
									className={'col-12 px-5 pt-3 mb-0'}
									style={{
										color: '#2d4f69',
									}}>
									Ocean king
									<a
										target='_blank'
										href={
											'https://minecode.github.io/app/ocean_king'
										}
										className='m-1 btn btn-primary'
										style={{
											border: 'none',
										}}>
										Website
									</a>
								</p>
								<p
									className={'col-12 px-5'}
									style={{
										color: 'grey',
										fontSize: 12,
									}}>
									O jogo "Ocean King" é um jogo de cartas que
									vais querer jogar contra os teus amigos. Tem
									uma vertente táctica bastante presente e
									promete muita diversão.
								</p>
								<div className={'col-12 px-5 py-0 my-0 pb-3'}>
									<img
										className={'px-2'}
										src='/images/react.png'
										alt='React'
										style={{
											maxWidth: 'auto',
											height: '40px',
										}}
									/>
									<img
										className={'px-2'}
										src='/images/html.png'
										alt='HTML'
										style={{
											maxWidth: 'auto',
											height: '40px',
										}}
									/>
									<img
										className={'px-2'}
										src='/images/css.png'
										alt='CSS'
										style={{
											maxWidth: 'auto',
											height: '40px',
										}}
									/>
									<img
										className={'px-2'}
										src='/images/js.png'
										alt='JS'
										style={{
											maxWidth: 'auto',
											height: '40px',
										}}
									/>
									<img
										className={'px-2'}
										src='/images/node.png'
										alt='NodeJS'
										style={{
											maxWidth: 'auto',
											height: '40px',
										}}
									/>
									<img
										className={'px-2'}
										src='/images/mongodb.png'
										alt='MongoDB'
										style={{
											maxWidth: 'auto',
											height: '40px',
										}}
									/>
								</div>

								<p
									className={'col-12 px-5 pt-3 mb-0'}
									style={{
										color: '#2d4f69',
									}}>
									Pet find
									<a
										target='_blank'
										href={
											'https://minecode.github.io/app/pet_find'
										}
										className='m-1 btn btn-primary'
										style={{
											border: 'none',
										}}>
										Website
									</a>
								</p>
								<p
									className={'col-12 px-5'}
									style={{
										color: 'grey',
										fontSize: 12,
									}}>
									Esta aplicação irá ajuda-lo a encontrar o
									seu animal de estimação. Adicione alertas
									para os seus vizinhos e ajude os
									utilizadores do "Pet find" a encontrar os
									seus animais de companhia.
								</p>
								<div className={'col-12 px-5 py-0 my-0 pb-3'}>
									<img
										className={'px-2'}
										src='/images/react.png'
										alt='React'
										style={{
											maxWidth: 'auto',
											height: '40px',
										}}
									/>
									<img
										className={'px-2'}
										src='/images/html.png'
										alt='HTML'
										style={{
											maxWidth: 'auto',
											height: '40px',
										}}
									/>
									<img
										className={'px-2'}
										src='/images/css.png'
										alt='CSS'
										style={{
											maxWidth: 'auto',
											height: '40px',
										}}
									/>
									<img
										className={'px-2'}
										src='/images/js.png'
										alt='JS'
										style={{
											maxWidth: 'auto',
											height: '40px',
										}}
									/>
									<img
										className={'px-2'}
										src='/images/python.png'
										alt='Python'
										style={{
											maxWidth: 'auto',
											height: '40px',
										}}
									/>
									<img
										className={'px-2'}
										src='/images/django.png'
										alt='Django'
										style={{
											maxWidth: 'auto',
											height: '40px',
										}}
									/>
									<img
										className={'px-2'}
										src='/images/pg.png'
										alt='Postgres'
										style={{
											maxWidth: 'auto',
											height: '40px',
										}}
									/>
								</div>

								<p
									className={'col-12 px-5 pt-3 mb-0'}
									style={{
										color: '#2d4f69',
									}}>
									Shopping Cart
									<a
										target='_blank'
										href={
											'https://minecode.github.io/app/shopping_cart'
										}
										className='m-1 btn btn-primary'
										style={{
											border: 'none',
										}}>
										Website
									</a>
								</p>
								<p
									className={'col-12 px-5'}
									style={{
										color: 'grey',
										fontSize: 12,
									}}>
									O "Shopping cart" irá ajudar na sua gestão
									mensal de gastos. Categorize as suas compras
									e veja em que lojas gastou mais em cada mês.
									Tenha acesso a relatórios e acompanhe a
									evolução dos preços.
								</p>
								<div className={'col-12 px-5 py-0 my-0 pb-3'}>
									<img
										className={'px-2'}
										src='/images/react.png'
										alt='React'
										style={{
											maxWidth: 'auto',
											height: '40px',
										}}
									/>
									<img
										className={'px-2'}
										src='/images/html.png'
										alt='HTML'
										style={{
											maxWidth: 'auto',
											height: '40px',
										}}
									/>
									<img
										className={'px-2'}
										src='/images/css.png'
										alt='CSS'
										style={{
											maxWidth: 'auto',
											height: '40px',
										}}
									/>
									<img
										className={'px-2'}
										src='/images/js.png'
										alt='JS'
										style={{
											maxWidth: 'auto',
											height: '40px',
										}}
									/>
									<img
										className={'px-2'}
										src='/images/python.png'
										alt='Python'
										style={{
											maxWidth: 'auto',
											height: '40px',
										}}
									/>
									<img
										className={'px-2'}
										src='/images/django.png'
										alt='Django'
										style={{
											maxWidth: 'auto',
											height: '40px',
										}}
									/>
									<img
										className={'px-2'}
										src='/images/pg.png'
										alt='Postgres'
										style={{
											maxWidth: 'auto',
											height: '40px',
										}}
									/>
								</div>

								<p
									className={'col-12 px-5 pt-3 mb-0'}
									style={{
										color: '#2d4f69',
									}}>
									Meteorology
									<a
										target='_blank'
										href={
											'https://minecode.github.io/meteorology/'
										}
										className='m-1 btn btn-primary'
										style={{
											border: 'none',
										}}>
										Website
									</a>
								</p>
								<p
									className={'col-12 px-5'}
									style={{
										color: 'grey',
										fontSize: 12,
									}}>
									A aplicação meteorology permite visualizar
									as previsões meteorológicas para os próximos
									dias através da API pública do{' '}
									<a
										href='https://www.ipma.pt/pt/index.html'
										target='_blank'>
										IPMA
									</a>
									.
								</p>
								<div className={'col-12 px-5 py-0 my-0 pb-3'}>
									<img
										className={'px-2'}
										src='/images/react.png'
										alt='React'
										style={{
											maxWidth: 'auto',
											height: '40px',
										}}
									/>
									<img
										className={'px-2'}
										src='/images/html.png'
										alt='HTML'
										style={{
											maxWidth: 'auto',
											height: '40px',
										}}
									/>
									<img
										className={'px-2'}
										src='/images/css.png'
										alt='CSS'
										style={{
											maxWidth: 'auto',
											height: '40px',
										}}
									/>
									<img
										className={'px-2'}
										src='/images/js.png'
										alt='JS'
										style={{
											maxWidth: 'auto',
											height: '40px',
										}}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default user;
