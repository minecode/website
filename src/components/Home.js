import React from 'react';
import Applications from './Home/Applications';
import Blog from './Home/Blog';
import Idea from './Home/Idea';
import Team from './Home/Team';

class Home extends React.Component {
	render() {
		return (
			<div>
				<div className={'container-fluid py-5'}>
					<div className={'container'}>
						<div className='row' style={{ alignItems: 'center' }}>
							<div className={'col-4 px-2'}>
								<img width='300' src={'./images/blog_1.png'} />
							</div>
							<div className={'col-8 px-2'}>
								<div className={'row'}>
									<div className={'col-6'}>
										<div className={'col-12 px-5'}>
											<div
												style={{
													color: '#323232',
													fontWeight: 100,
													fontSize: 30,
												}}>
												Portefólio de aplicações
											</div>
										</div>
										<div className={'col-12 px-5 py-3'}>
											<div className={'btn btn-primary'}>
												Aplicações
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className={'container-fluid py-5'}>
					<div className={'container'}>
						<div className='row' style={{ alignItems: 'center' }}>
							<div className={'col-8 px-2'}>
								<div className={'col-12 px-5'}>
									<div
										style={{
											color: '#323232',
											fontWeight: 100,
											fontSize: 30,
										}}>
										Desenvolvimento de aplicações web e
										mobile.
									</div>
								</div>
								<div
									className={'col-12 px-5 py-3'}
									style={{
										color: '#5ca4da',
										fontSize: 20,
										fontWeight: '100',
									}}>
									Aplicações criadas e pensadas para o
									utilizador final, tendo sempre em conta a
									estrutura funcional e visual da aplicação.
								</div>
							</div>
							<div className={'col-4 px-2'}>
								<img width='300' src={'./images/home_1.png'} />
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
							<div className={'col-4 px-2'}>
								<img width='300' src={'./images/home_2.png'} />
							</div>
							<div className={'col-8 px-2'}>
								<div className={'col-12 px-5'}>
									<div
										style={{
											color: '#323232',
											fontWeight: 100,
											fontSize: 30,
										}}>
										As tecnologias mais usadas e com maior
										tendência.
									</div>
								</div>
								<div
									className={'col-12 px-5 py-3'}
									style={{
										color: '#f1f1f1',
										fontSize: 20,
										fontWeight: '100',
									}}>
									Selecionamos e usamos as tecnologias que
									melhor se adaptam ao projeto e às suas
									necessidades.
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className={'container-fluid py-5'}>
					<div className={'container'}>
						<div className='row' style={{ alignItems: 'center' }}>
							<div className={'col-8 px-2'}>
								<div className={'col-12 px-5'}>
									<div
										style={{
											color: '#323232',
											fontWeight: 100,
											fontSize: 30,
										}}>
										Transparência e partilha de
										conhecimento.
									</div>
								</div>
								<div
									className={'col-12 px-5 py-3'}
									style={{
										color: '#5ca4da',
										fontSize: 20,
										fontWeight: '100',
									}}>
									Como principal objetivo de criar uma
									comunidade open source para criação de
									aplicações inovadoras e partilha de
									conhecimentos.
								</div>
							</div>
							<div className={'col-4 px-2'}>
								<img width='300' src={'./images/home_3.png'} />
							</div>
						</div>
					</div>
				</div>

				{/* <Applications /> */}
				{/* <Blog /> */}
				{/* <Idea /> */}
				<Team />
			</div>
		);
	}
}

export default Home;
