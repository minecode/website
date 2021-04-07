import '../style/index.scss';
import '../style/index.css';
import Head from 'next/head';
import React from 'react';
import App from 'next/app';
import Layout from '../components/Layout';

class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		return (
			<>
				<Head>
					<title>Minecode</title>
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				</Head>
				<Layout>
					<Component {...pageProps}></Component>
				</Layout>
			</>
		);
	}
}

export default MyApp;
