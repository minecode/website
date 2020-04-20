import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Post from './Blog/Post';
import Tag from './Blog/Tag';
import User from './Blog/User';
import Blog from './Blog';
import Releases from './Releases';
import Release from './Release';
import Footer from './Footer';
import NoMatch from './NoMatch';
import AppPage from './AppPage';
import PrivacyPolicy from './PrivacyPolicy';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';

class App extends React.Component {
	render() {
		return (
			<Router>
				<main>
					<Navbar />
					<Switch>
						<Route exact path='/' component={Home}></Route>
						<Route exact path='/blog' component={Blog}></Route>
						<Route
							exact
							path='/app/:appName'
							component={AppPage}></Route>
						<Route
							exact
							path='/blog/post/:id'
							component={Post}></Route>
						<Route
							exact
							path='/blog/tag/:tag'
							component={Tag}></Route>
						<Route
							exact
							path='/blog/user/:user'
							component={User}></Route>
						<Route
							exact
							path='/releases'
							component={Releases}></Route>
						<Route
							exact
							path='/release/:version'
							component={Release}></Route>
						<Route path='/covid19'>
							<Redirect to='/covid_19' /></Route>
						<Route
							exact
							path='/privacyPolicy/shopping_cart'
							component={PrivacyPolicy}></Route>
						<Route
							exact
							path='/privacyPolicy/pet_find'
							component={PrivacyPolicy}></Route>
						<Route
							exact
							path='/privacyPolicy/covid_19'
							component={PrivacyPolicy}></Route>
						<Route
							exact
							path='/privacyPolicy/ocean_king'
							component={PrivacyPolicy}></Route>
						<Route
							exact
							path='/privacyPolicy/codecontest'
							component={PrivacyPolicy}></Route>
						<Route path='*' component={NoMatch}></Route>
					</Switch>
				</main>
				<Footer />
			</Router>
		);
	}
}

export default App;
